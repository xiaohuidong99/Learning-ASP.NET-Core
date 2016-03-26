using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNet.Mvc;
using Microsoft.Extensions.Logging;
using TheWorld.Models;
using TheWorld.ViewModels;
using System.Linq;
using TheWorld.Services;

// TODO: Implement Put/Patch and Delete operation for stops

namespace TheWorld.Controllers.API
{
    [Route("api/trips/{tripName}/stops")]
    public class StopController : Controller
    {
        private readonly ILogger<StopController> _logger;
        private readonly IWorldRepository _repository;
        private readonly CoordinateService _coordinateService;

        public StopController(IWorldRepository repository, ILogger<StopController> logger,
            CoordinateService coordinateService)
        {
            _repository = repository;
            _logger = logger;
            _coordinateService = coordinateService;
        }

        [HttpGet("")]
        public async Task<JsonResult> Get(string tripName)
        {
            try
            {
                var results = await _repository.GetTripByNameAsync(tripName);

                return Json(results == null
                    ? null
                    : Mapper.Map<IEnumerable<StopViewModel>>(results.Stops.OrderBy(x => x.Order)));
            }
            catch (Exception e)
            {
                _logger.LogError($"Failed to get stops for trip ({tripName}).", e);
                Response.StatusCode = (int) HttpStatusCode.BadRequest;
                return Json("Error occured finding trip name.");
            }
        }

        [HttpPost("")]
        public async Task<JsonResult> Post(string tripName, [FromBody] StopViewModel vm)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var newStop = Mapper.Map<Stop>(vm);

                    var coordinateResult = await _coordinateService.Lookup(newStop.Name);
                    if (!coordinateResult.Success)
                    {
                        Response.StatusCode = (int) HttpStatusCode.BadRequest;
                        return Json(coordinateResult.Message);
                    }

                    newStop.Longitude = coordinateResult.Longitude;
                    newStop.Latitude = coordinateResult.Latitude;

                    await _repository.AddStopAsync(tripName, newStop);

                    if (await _repository.CommitAsync())
                    {
                        Response.StatusCode = (int) HttpStatusCode.Created;
                        return Json(Mapper.Map<StopViewModel>(newStop));
                    }
                }
            }
            catch (Exception e)
            {
                _logger.LogError("Failed to save new stop.", e);
                Response.StatusCode = (int) HttpStatusCode.BadRequest;
                return Json(new {e.Message});
            }

            Response.StatusCode = (int) HttpStatusCode.BadRequest;
            return Json("Failed to add new stop.");
        }
    }
}