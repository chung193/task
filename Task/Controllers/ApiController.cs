using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System.Linq.Expressions;
using Task.Common;

namespace Task.Controllers
{
    public class ApiController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        /* [EnableCors("MyAllowSpecificOrigins")]
        [HttpGet] */
        public string getData(string target)
        {
            string result;
            // return target;
            switch (target)
            {
                case "slide11":
                    result = XuLyDuLieu.loadJson(DataUrl.slide11);
                    break;
                case "slide12":
                    result = XuLyDuLieu.loadJson(DataUrl.slide12);
                    break;
                case "slide13":
                    result = XuLyDuLieu.loadJson(DataUrl.slide13);
                    break;
                case "slide14":
                    result = XuLyDuLieu.loadJson(DataUrl.slide14);
                    break;
                case "slide15":
                    result = XuLyDuLieu.loadJson(DataUrl.slide15);
                    break;
                case "slide21":
                    result = XuLyDuLieu.loadJson(DataUrl.slide21);
                    break;
                case "slide22":
                    result = XuLyDuLieu.loadJson(DataUrl.slide22);
                    break;
                case "slide23":
                    result = XuLyDuLieu.loadJson(DataUrl.slide22);
                    break;
                case "popup1":
                    result = XuLyDuLieu.loadJson(DataUrl.popup1);
                    break;
                case "popup2":
                    result = XuLyDuLieu.loadJson(DataUrl.popup2);
                    break;
                default:
                    result = "không tìm thấy dữ liệu yêu cầu";
                    break;
            }
            
            return result;
        }
    }
}
