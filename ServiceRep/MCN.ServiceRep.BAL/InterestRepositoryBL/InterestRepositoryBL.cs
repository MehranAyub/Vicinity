using MCN.Common.AttribParam;
using MCN.Core.Entities.Entities;
using MCN.ServiceRep.BAL.ContextModel;
using MCN.ServiceRep.BAL.InterestRepositoryBL.Dtos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MCN.ServiceRep.BAL.ServicesRepositoryBL.IInterestRepositoryBL
{
    public class InterestDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public bool Paid { get; set; }
        public string Description { get; set; }
        public double Cost { get; set; }
        public string Type { get; set; }
        public string Display { get; set; }
        public string Value { get; set; }

    }

    public class InterestFilterDto
    {
        public string Keyword { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
    }

    public interface IInterestRepositoryBL
    {
        public List<InterestDto> GetInterests(InterestFilterDto filter);
        public SwallResponseWrapper GetServices();
        public SwallResponseWrapper GetUserServices(int userId);
        public SwallResponseWrapper AddService(UserInterestDto dto);
        public SwallResponseWrapper RemoveService(UserInterestDto dto);
        public class InterestRepositoryBL : BaseRepository, IInterestRepositoryBL
        {
            public InterestRepositoryBL(RepositoryContext repository) : base(repository)
            {


            }

            public List<InterestDto> GetInterests(InterestFilterDto filter)
            {
                var result = repositoryContext.Interests.AsQueryable();
                if (!string.IsNullOrWhiteSpace(filter.Keyword))
                {
                    result = result.Where(x => x.Title.Contains(filter.Keyword));
                }
                result = result.Skip(filter.PageNumber * filter.PageSize).Take(filter.PageSize);
                return result.Select(x =>
                new InterestDto
                {
                    Cost = x.Cost,
                    Description = x.Description,
                    Id = x.Id,
                    Paid = x.Paid,
                    Title = x.Title,
                    Type = x.Type,
                    Display = x.Title,
                    Value = x.Title
                }).ToList();
            }

            public SwallResponseWrapper GetServices()
            {
               
                var services = repositoryContext.Interests.ToList();
               
                return new SwallResponseWrapper()
                {
                    SwallText = null,
                    StatusCode = 200,
                    Data = services
                };
            }
            public SwallResponseWrapper GetUserServices(int userId)
            {
               
                var userinterests = repositoryContext.UserInterests.Where(x=>x.UserId==userId).ToList();
                var interests = repositoryContext.Interests.ToList();
                var data = (from U in userinterests
                            join I in interests on U.InterestId equals I.Id
                            select new
                            {
                                Id = I.Id,
                                Title = I.Title,
                                Cost = I.Cost,
                                Description = I.Description,
                                Type = I.Type

                            }
                          );
                return new SwallResponseWrapper()
                {
                    SwallText = null,
                    StatusCode = 200,
                    Data = data
                };
            }
            public SwallResponseWrapper AddService(UserInterestDto dto)
            {
                var interest = repositoryContext.Interests.FirstOrDefault(x => x.Id == dto.interestId);
                var location = repositoryContext.Locations.FirstOrDefault(x => x.UserId == dto.userId);
                UserInterest userinterest = new UserInterest
                {
                    InterestId = interest.Id,
                    UserId = dto.userId,
                    LocationId = location.Id
                };
                repositoryContext.UserInterests.Add(userinterest);
                repositoryContext.SaveChanges();
                return new SwallResponseWrapper()
                {
                    SwallText = null,
                    StatusCode = 200,
                    Data = interest
                };
            }
            public SwallResponseWrapper RemoveService(UserInterestDto dto)
            {
                var interest = repositoryContext.UserInterests.FirstOrDefault(x => x.InterestId == dto.interestId&&x.UserId==dto.userId);

                repositoryContext.Remove(interest);
                repositoryContext.SaveChanges();
                return new SwallResponseWrapper()
                {
                    SwallText = null,
                    StatusCode = 200,
                    Data = 1
                };
            }
        }
    }
}
