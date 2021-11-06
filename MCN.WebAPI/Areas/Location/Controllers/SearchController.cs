using MCN.ServiceRep.BAL.ServicesRepositoryBL.ISearchRepositoryBL;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MCN.WebAPI.Areas.Location.Controllers
{

    public class SearchFilter
    { 
        public string Keyword { get; set; }
        public double MinDistance { get; set; }
        public double MaxDistance { get; set; }
        public List<int> Interests { get; set; }
        public double SearchLat { get; set; }
        public double SearchLng { get; set; }
    
    }


    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private readonly ISearchRepositoryBL _userService;
        public SearchController(ISearchRepositoryBL userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public IActionResult GetResults([FromBody] SearchFilter filter)
        {
            var searchDto = new SearchFilterDto
            {
                Interests = filter.Interests,
                Keyword = filter.Keyword,
                MaxDistance = filter.MaxDistance,
                MinDistance = filter.MinDistance,
                SearchLat = filter.SearchLat,
                SearchLng = filter.SearchLng
            };

            var result = _userService.GetSearchResults(searchDto);
            return Ok(result);
        }
    }
}
