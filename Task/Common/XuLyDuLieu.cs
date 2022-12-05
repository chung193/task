using Task.Models;
using Newtonsoft.Json;

namespace Task.Common
{
    public class XuLyDuLieu
    {
        public static string loadJson(string filePath)
        {
            string jsonString = "";
            using (StreamReader r = new StreamReader(filePath))
            {
                jsonString = r.ReadToEnd();
                // dynamic result = JsonConvert.DeserializeObject(json);
            }
            return jsonString;
        }
    }
}
