using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MCN.WebAPI.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Magazine()
        {
            return View();
        }
        public IActionResult Umrah()
        {
            return View();
        }
        public IActionResult Scholarships()
        {
            return View();
        }
        public IActionResult NewsActivities()
        {
            return View();
        }
        public IActionResult Donations()
        {
            return View();
        }
        public IActionResult Classifieds()
        {
            return View();
        }

        public IActionResult Locals()
        {
            return Redirect("http://localhost:4200");
        }
    }
}
