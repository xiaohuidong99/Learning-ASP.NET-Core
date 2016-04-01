using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.Data.Entity;

namespace TheWorld.Models
{
    public sealed class WorldContext : IdentityDbContext<WorldUser>
    {
        public DbSet<Trip> Trips { get; set; }
        public DbSet<Stop> Stops { get; set; }

        public WorldContext()
        {
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // TODO: Implement using environmental variables or UserSecrets
            optionsBuilder.UseSqlServer(Startup.ConfigurationRoot["Data:WorldContextConnection"]);

            base.OnConfiguring(optionsBuilder);
        }
    }
}