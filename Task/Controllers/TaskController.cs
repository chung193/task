using Microsoft.AspNetCore.Mvc;
using Task.Common;
using Task.Models;
using Newtonsoft.Json;

namespace Task.Controllers
{
    public class TaskController : Controller
    {
        
        public IActionResult Index()
        {
            //string x = XuLyDuLieu.loadJson(DataUrl.slide11);
            //return x;
            return View();
        }

        public IActionResult Page()
        {
            return View();
        }
    }
}
