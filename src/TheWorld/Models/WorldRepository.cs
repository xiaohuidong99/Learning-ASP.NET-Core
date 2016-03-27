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
        private readonly ILogger<WorldContext> _logger;

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

        public IEnumerable<Trip> GetUserTripsWithStops(string username)
        {
            try
            {
                return _context.Trips
                    .Include(x => x.Stops)
                    .OrderBy(x => x.Name)
                    .Where(x => x.Username == username)
                    .ToList();
            }
            catch (Exception e)
            {
                _logger.LogError("Could not get all trips with stops for user from database.", e);
                return null;
            }
        }

        public async Task<List<Trip>> GetUserTripsWithStopsAsync(string username)
        {
            try
            {
                return await _context.Trips
                    .Include(x => x.Stops)
                    .OrderBy(x => x.Name)
                    .Where(x => x.Username == username)
                    .ToListAsync();
            }
            catch (Exception e)
            {
                _logger.LogError("Could not get all trips with stops for user asynchronously from database.", e);
                return null;
            }
        }

        public void AddTrip(Trip newTrip)
        {
            _context.Add(newTrip);
        }

        public bool Commit()
        {
            return _context.SaveChanges() > 0;
        }

        public async Task<bool> CommitAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public Trip GetTripByName(string tripName, string username)
        {
            return _context.Trips
                .Include(x => x.Stops)
                .FirstOrDefault(x => x.Name == tripName && x.Username == username);
        }

        public async Task<Trip> GetTripByNameAsync(string tripName, string username)
        {
            return await _context.Trips
                .Include(x => x.Stops)
                .FirstOrDefaultAsync(x => x.Name == tripName && x.Username == username);
        }

        public void AddStop(string tripName, string username, Stop newStop)
        {
            var trip = GetTripByName(tripName, username);

            // TODO: Fix bug caused when number of stops is 0 (info on pluralsight)
            newStop.Order = trip.Stops.Max(x => x.Order) + 1;

            _context.Stops.Add(newStop);
        }

        public async Task AddStopAsync(string tripName, string username, Stop newStop)
        {
            var trip = await GetTripByNameAsync(tripName, username);

            newStop.Order = trip.Stops.Max(x => x.Order) + 1;

            trip.Stops.Add(newStop);
            _context.Stops.Add(newStop);
        }
    }
}