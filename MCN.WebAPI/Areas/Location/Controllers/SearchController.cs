using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MCN.WebAPI.Areas.Location.Controllers
{

    public class SearchFilter
    { 
        public double MinDistance { get; set; }
        public double MaxDistance { get; set; }
        public List<int> Interests { get; set; }
        public double SearchLat { get; set; }
        public double SearchLng { get; set; }
    
    }


    public class SearchController : Controller
    {
        public IActionResult GetResults([FromBody] SearchFilter filter)
        {
            return View();
        }
    }
}
