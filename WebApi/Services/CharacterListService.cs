using Newtonsoft.Json;
using System.Collections.Generic;
using System.Security.Cryptography;
using WebApi.Models;
using WebApi.Utils;

namespace WebApi.Services
{
    public class CharacterListService
    {
        public async Task<List<Character>> GetListCharacter(string limit, string offset)
        {
           
            List<Character> listCharacter = new List<Character>();

            var httpGet = new HttpClient();
            var request = new HttpRequestMessage();

            //orderBy=name&limit=1&offset=8

            string inicioUrl = "http://gateway.marvel.com/v1/public/characters?ts=1&orderBy=name";
            string limitUrl = "&limit=" + limit;
            string offsetUrl = "&offset=" + offset;
            string keyToken = "&apikey=fcd2ce6a95b293102fa310b62efa0c0f&hash=1e36dd6a36d295da13850e918cdd9d75";
            string url = $"{inicioUrl}{limitUrl}{offsetUrl}{keyToken}";
            var response = await httpGet.GetAsync(url);

            var data = await response.Content.ReadAsStringAsync();

            dynamic obj = JsonConvert.DeserializeObject(data);

            
            dynamic valor = obj.data.results;

            foreach (var item in valor)
            {
                Character character = new Character();
                character.Id = item.id;
                character.Name = item.name;
                character.TotalCharacter = obj.data.total;
                string urlImagem = item.thumbnail.path;
                string extensao = item.thumbnail.extension;
                character.UrlImage = urlImagem + "." + extensao;
                Console.WriteLine(character);
                listCharacter.Add(character);
            }
            Console.WriteLine(Convert.ToString(listCharacter));

            return listCharacter;
        }
    }
}
