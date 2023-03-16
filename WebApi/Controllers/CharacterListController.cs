using Microsoft.AspNetCore.Mvc;
using WebApi.Models;
using WebApi.Services;


namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    
    public class CharacterListController : Controller
    {
        [HttpGet(Name = "CharacterList")]
        [HttpGet("{limit}/{offset}")]
        public async Task<List<Character>> Index(string limit, string offset)
        {
            CharacterListService listCharacter = new CharacterListService();

            List<Character> listaCharacter = new List<Character>();
            listaCharacter = await listCharacter.GetListCharacter(limit, offset);

            return listaCharacter;
        }
    }
}
