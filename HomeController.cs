using System.Diagnostics;
using AdminDashboard3.Models;
using Microsoft.AspNetCore.Mvc;

namespace AdminDashboard3.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Vehicles()
        {
            return View();
        }
        public IActionResult Inspections()
        {
            return View();
        }
        public IActionResult Movement()
        {
            return View();
        }
        public IActionResult Employee()
        {
            return View();
        }

        public IActionResult Setting()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
