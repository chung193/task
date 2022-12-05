using Microsoft.AspNetCore.Mvc;

namespace Task.Controllers
{
    public class TaskController : Controller
    {
        public string Index()
        {
            return "welcome to my task";
        }
    }
}
