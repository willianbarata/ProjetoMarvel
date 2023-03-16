using Newtonsoft.Json;
using WebApi.Models;

namespace WebApi.Services
{
    public class CharacterDetailsService
    {
        public async Task Get()
        {
            Character character = new Character();

            var httpGet = new HttpClient();
            var request = new HttpRequestMessage();

            var response = await httpGet.GetAsync("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=fcd2ce6a95b293102fa310b62efa0c0f&hash=1e36dd6a36d295da13850e918cdd9d75");

            var data = await response.Content.ReadAsStringAsync();

            character = JsonConvert.DeserializeObject<Character>(data);
        }
    }
}
