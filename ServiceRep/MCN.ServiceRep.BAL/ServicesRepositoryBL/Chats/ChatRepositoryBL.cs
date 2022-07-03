using MCN.Common.AttribParam;
using MCN.Core.Entities.Entities;
using MCN.ServiceRep.BAL.ContextModel;
using MCN.ServiceRep.BAL.ServicesRepositoryBL.Chats.Dtos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using static MCN.Common.AttribParam.SwallTextData;

namespace MCN.ServiceRep.BAL.ServicesRepositoryBL.Chats
{
 
        public class ChatRepositoryBL : BaseRepository, IChatRepositoryBL
        {
            public ChatRepositoryBL(RepositoryContext repository) : base(repository)
            {


            }

            public SwallResponseWrapper GetChats(int currentUserId, int sellerUserId)
            {
                var result = repositoryContext.Chats.Where(x=>(x.Sender==currentUserId || x.Sender == sellerUserId) && (x.Receiver==sellerUserId || x.Receiver == currentUserId)).OrderBy(x=>x.CreatedAt).AsQueryable();
                var data= result.Select(x =>
                new ChatDto
                { Id=x.Id,
                CreatedAt=x.CreatedAt,
                IsDelete=x.IsDelete,
                Message=x.Message,
                Sender=x.Sender,
                Receiver=x.Receiver
                }).ToList();

                return new SwallResponseWrapper()
                {
                    SwallText = null,
                    StatusCode = 200,
                    Data = data
                };
            }

            public SwallResponseWrapper CreateChat(string message,int SenderId,int ReceiverId)
            { 
                Chat cht = new Chat
                {

                    CreatedAt = DateTime.Now,
                    Message=message,
                    Sender= SenderId,
                    Receiver= ReceiverId,
                    IsDelete=false,                    
                };

                repositoryContext.Chats.Add(cht);
                repositoryContext.SaveChanges(); 
     

                return new SwallResponseWrapper()
                {
                    SwallText = LoginUser.MessageCreatedScuccessfully,
                    StatusCode = 200,
                    Data = cht
                };
            }
        public SwallResponseWrapper GetInbox(int userId)
        {
            var chats = repositoryContext.Chats.Where(x=>x.Receiver==userId).OrderBy(x => x.CreatedAt).AsQueryable();
            var data = chats.Select(x => x.Sender).Distinct().Select(x=>chats.FirstOrDefault(y=>y.Sender==x)).ToList();


            var result = data.Select(x =>
             new ChatDto
             {
                 Id = x.Id,
                 CreatedAt = x.CreatedAt,
                 Sender = x.Sender,
                 Message=x.Message,
                 SenderName = repositoryContext.Users.FirstOrDefault(y => y.ID == x.Sender).FirstName,

             }).ToList();

            return new SwallResponseWrapper()
            {
                SwallText = null,
                StatusCode = 200,
                Data = result
            };
        }
    }
    }

