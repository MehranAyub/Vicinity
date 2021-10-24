using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MCN.ServiceRep.BAL.ServicesRepositoryBL.Locals;
using MCN.ServiceRep.BAL.ServicesRepositoryBL.Locals.Criteria;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MCN.WebAPI.Areas.Location.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LocationController : ControllerBase
    {
        ILocalsRepositoryBL _localsRepositoryBL;
        public LocationController(ILocalsRepositoryBL localsRepositoryBL)
        {
            _localsRepositoryBL = localsRepositoryBL;
        }

        [HttpPost]
        [Route("SearchLocations")]
        public IActionResult SearchLocations([FromBody]SearchCriteria criteria)
        {
            return Ok(_localsRepositoryBL.Locations(criteria));
        }


        [HttpGet]
        [Route("Menu")]
        public IActionResult GetMenu()
        {
            return Ok(_localsRepositoryBL.MenuItem());
        }

        [HttpGet]
        [Route("Offer")]
        public IActionResult GetOffer()
        {
            return Ok(_localsRepositoryBL.GetOffers());
        }

        [HttpGet]
        [Route("LocalPopular")]
        public IActionResult GetLocalPopular()
        {
            return Ok(_localsRepositoryBL.localPopulars());
        }
         
        [HttpGet]
        [Route("Detail")]
        public IActionResult Detail(int Id)
        {
            return Ok(_localsRepositoryBL.GetLocationResultDetails(Id));
        }


        // GET: api/Locals/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Locals
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Locals/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
