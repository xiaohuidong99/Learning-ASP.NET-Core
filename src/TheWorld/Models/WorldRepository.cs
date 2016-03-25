using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;
using Microsoft.Extensions.Logging;

namespace TheWorld.Models
{
    public class WorldRepository : IWorldRepository
    {
        private readonly WorldContext _context;
        private ILogger<WorldContext> _logger;

        public WorldRepository(WorldContext context, ILogger<WorldContext> logger)
        {
            _context = context;
            _logger = logger;
        }

        public IEnumerable<Trip> GetAllTrips()
        {
            try
            {
                return _context.Trips
                    .OrderBy(x => x.Name)
                    .ToList();
            }
            catch (Exception e)
            {
                _logger.LogError("Could not get all trips from database.", e);
                return null;
            }
        }

        public async Task<List<Trip>> GetAllTripsAsync()
        {
            try
            {
                return await _context.Trips
                    .OrderBy(x => x.Name)
                    .ToListAsync();
            }
            catch (Exception e)
            {
                _logger.LogError("Could not get all trips asynchronously from database.", e);
                return null;
            }
        }

        public IEnumerable<Trip> GetAllTripsWithStops()
        {
            try
            {
                return _context.Trips
                    .Include(x => x.Stops)
                    .OrderBy(x => x.Name)
                    .ToList();
            }
            catch (Exception e)
            {
                _logger.LogError("Could not get all trips with stops from database.", e);
                return null;
            }
        }

        public async Task<List<Trip>> GetAllTripsWithStopsAsync()
        {
            try
            {
                return await _context.Trips
                    .Include(x => x.Stops)
                    .OrderBy(x => x.Name)
                    .ToListAsync();
            }
            catch (Exception e)
            {
                _logger.LogError("Could not get all trips with stops asynchronously from database.", e);
                return null;
            }
        }
    }
}