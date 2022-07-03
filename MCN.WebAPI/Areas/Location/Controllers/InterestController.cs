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
        public IActionResult GetServices(int userId)
        {
            var result = _interestService.GetServices(userId);
            return Ok(result);
        }
    }
}
