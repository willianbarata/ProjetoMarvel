using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CharacterDetailsController : Controller
    {
        [HttpGet(Name = "CharacterDetailsList")]
        public IActionResult Index()
        {
            return View();
        }
    }
}
