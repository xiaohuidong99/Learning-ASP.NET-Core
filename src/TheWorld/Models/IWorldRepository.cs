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
        void AddTrip(Trip newTrip);
        bool Commit();
        Task<bool> CommitAsync();
        Trip GetTripByName(string tripName);
        Task<Trip> GetTripByNameAsync(string tripName);
        void AddStop(string tripName, Stop newStop);
        Task AddStopAsync(string tripName, Stop newStop);
    }
}