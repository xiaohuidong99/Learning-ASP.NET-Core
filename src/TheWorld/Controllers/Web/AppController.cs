using Microsoft.AspNet.Mvc;
using System.Linq;
using System.Threading.Tasks;
using TheWorld.Models;
using TheWorld.Services;
using TheWorld.ViewModels;

namespace TheWorld.Controllers.Web
{
    public class AppController : Controller
    {
        private readonly IEmailService _emailService;
        private readonly IWorldRepository _repository;

        public AppController(IEmailService emailService, IWorldRepository repository)
        {
            _emailService = emailService;
            _repository = repository;
        }

        // GET: /<controller>/
        [HttpGet]
        public async Task<IActionResult> Index()
        {
            return View(await _repository.GetAllTripsAsync());
        }

        // GET: /<controller>/
        [HttpGet]
        public IActionResult About()
        {
            return View();
        }

        // GET: /<controller>/
        [HttpGet]
        public IActionResult Contact()
        {
            return View();
        }

        // POST: /<controller>/
        [HttpPost]
        public IActionResult Contact(ContactViewModel model)
        {
            if (!ModelState.IsValid) return View();

            if (_emailService.SendEmail(
                Startup.ConfigurationRoot["AppSettings:SiteEmailAddress"],
                Startup.ConfigurationRoot["AppSettings:SiteEmailAddress"],
                $"Contage Page from {model.Name} ({model.Email})",
                model.Message))
            {
                ModelState.Clear();
            }
            else
            {
                ModelState.AddModelError("", "Message failed to send.");
            }

            return View();
        }
    }
}