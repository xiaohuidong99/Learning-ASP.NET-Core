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
        IEnumerable<Trip> GetUserTripsWithStops(string username);
        Task<List<Trip>> GetUserTripsWithStopsAsync(string username); 
        void AddTrip(Trip newTrip);
        bool Commit();
        Task<bool> CommitAsync();
        Trip GetTripByName(string tripName, string username);
        Task<Trip> GetTripByNameAsync(string tripName, string usernames);
        void AddStop(string tripName, string username, Stop newStop);
        Task AddStopAsync(string tripName, string username, Stop newStop);
    }
}