using System.Collections.Generic;
using System.Threading.Tasks;

namespace TheWorld.Models
{
    public interface IWorldRepository
    {
        IEnumerable<Trip> GetAllTrips();
        Task<List<Trip>> GetAllTripsAsync();
        IEnumerable<Trip> GetAllTripsWithStops();
        Task<List<Trip>> GetAllTripsWithStopsAsync();
    }
}