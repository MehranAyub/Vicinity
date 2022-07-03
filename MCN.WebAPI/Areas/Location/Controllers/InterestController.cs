using MCN.ServiceRep.BAL.InterestRepositoryBL.Dtos;
using MCN.ServiceRep.BAL.ServicesRepositoryBL.IInterestRepositoryBL;
using MCN.ServiceRep.BAL.ServicesRepositoryBL.ISearchRepositoryBL;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MCN.WebAPI.Areas.Location.Controllers
{

    public class InterestFilter
    { 
        public string Keyword { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
    
    }


    [Route("api/[controller]")]
    [ApiController]
    public class InterestController : ControllerBase
    {
        private readonly IInterestRepositoryBL _interestService;
        public InterestController(IInterestRepositoryBL interestService)
        {
            _interestService = interestService;
        }

        [HttpPost]
        [Route("GetInterestList")]
        public IActionResult GetInterestList([FromBody] InterestFilter filter)
        {
            var result = _interestService.GetInterests(new InterestFilterDto { Keyword = filter.Keyword, PageNumber = filter.PageNumber, PageSize = filter.PageSize });
            return Ok(result);
        }

        [HttpGet]
        [Route("GetServices")]
        public IActionResult GetServices()
        {
            //These are those services which are not added by seller in his profile.
            var result = _interestService.GetServices();
            return Ok(result);
        }
        [HttpGet]
        [Route("GetUserServices")]
        public IActionResult GetUserServices(int userId)
        {
          
            var result = _interestService.GetUserServices(userId);
            return Ok(result);
        }
        [HttpPost]
        [Route("AddService")]
        public IActionResult AddService(UserInterestDto dto)
        {
            var result = _interestService.AddService(dto);
            return Ok(result);
        }
        [HttpPost]
        [Route("RemoveService")]
        public IActionResult RemoveService(UserInterestDto dto)
        {
            var result = _interestService.RemoveService(dto);
            return Ok(result);
        }
    }
}
