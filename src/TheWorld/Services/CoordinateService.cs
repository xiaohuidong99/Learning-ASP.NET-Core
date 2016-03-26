using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json.Linq;

namespace TheWorld.Services
{
    public class CoordinateService
    {
        private ILogger<CoordinateService> _logger;

        public CoordinateService(ILogger<CoordinateService> logger)
        {
            _logger = logger;
        }

        public async Task<CoordinateServiceResult> Lookup(string location)
        {
            var result = new CoordinateServiceResult()
            {
                Success = false,
                Message = "Undetermined failure while looking up coordinates."
            };

            // TODO: Implement using UserSecrets or some other more secure technique (same with connection string)
            var bingKey = Startup.ConfigurationRoot["AppSettings:BingKey"];
            var encodedLocation = WebUtility.UrlEncode(location);
            var url = $"http://dev.virtualearth.net/REST/v1/Locations?q={encodedLocation}&key={bingKey}";

            var client = new HttpClient();

            var json = await client.GetStringAsync(url);

            // Fragile, might need to change if the Bing API does
            var results = JObject.Parse(json);
            var resources = results["resourceSets"][0]["resources"];
            if (!resources.HasValues)
            {
                result.Message = $"Could not find '{location}' as a location.";
            }
            else
            {
                var confidence = (string) resources[0]["confidence"];
                if (confidence != "High")
                {
                    result.Message = $"Could not find a confident match for '{location}' as a location.";
                }
                else
                {
                    var coords = resources[0]["geocodePoints"][0]["coordinates"];
                    result.Latitude = (double) coords[0];
                    result.Longitude = (double) coords[1];
                    result.Success = true;
                    result.Message = "Success";
                }
            }

            return result;
        }
    }
}
