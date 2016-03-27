using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using Microsoft.Extensions.Logging;
using TheWorld.Models;
using TheWorld.ViewModels;

namespace TheWorld.Controllers.API
{
    [Authorize]
    [Route("api/trips")]
    public class TripController : Controller
    {
        private readonly IWorldRepository _repository;
        private readonly ILogger<TripController> _logger;

        public TripController(IWorldRepository repository, ILogger<TripController> logger)
        {
            _repository = repository;
            _logger = logger;
        }

        [HttpGet("")]
        public async Task<JsonResult> Get()
        {
            return Json(Mapper.Map<IEnumerable<TripViewModel>>(await _repository.GetUserTripsWithStopsAsync(User.Identity.Name)));
        }

        [HttpPost("")]
        public async Task<JsonResult> Post([FromBody]TripViewModel viewModel)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newTrip = Mapper.Map<Trip>(viewModel);

                    newTrip.Username = User.Identity.Name;

                    _logger.LogInformation("Attempting to save a new trip.");
                    _repository.AddTrip(newTrip);

                    if (await _repository.CommitAsync())
                    {
                        Response.StatusCode = (int) HttpStatusCode.Created;
                        return Json(Mapper.Map<TripViewModel>(newTrip));
                    }
                }
            }
            catch (Exception e)
            {
                _logger.LogError("Failed to save new trip.", e);
                Response.StatusCode = (int)HttpStatusCode.BadRequest;
                return Json(new {e.Message });
            }

            Response.StatusCode = (int) HttpStatusCode.BadRequest;
            return Json("Failed to add new trip.");
        }
    }
}
