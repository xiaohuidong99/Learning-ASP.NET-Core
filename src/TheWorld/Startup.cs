using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.PlatformAbstractions;
using TheWorld.Models;
using TheWorld.Services;

namespace TheWorld
{
    public class Startup
    {
        public static IConfigurationRoot ConfigurationRoot { get; set; }

        public Startup(IApplicationEnvironment environment)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(environment.ApplicationBasePath)
                .AddJsonFile("config.json")
                .AddEnvironmentVariables();

            ConfigurationRoot = builder.Build();
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddLogging();

            services.AddEntityFramework()
                .AddSqlServer()
                .AddDbContext<WorldContext>();

            services.AddTransient<WorldContextSeedData>();
            services.AddScoped<IWorldRepository, WorldRepository>();

            // TODO: Implement real emailService using info @ docs.asp.net
            services.AddScoped<IEmailService, DebugEmailService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, WorldContextSeedData seeder, ILoggerFactory loggerFactory)
        {
            if (env.IsDevelopment())
            {
                loggerFactory.AddDebug(LogLevel.Information);
                app.UseDeveloperExceptionPage();
            }
            else
            {
                loggerFactory.AddDebug(LogLevel.Error);
                // TODO: Implement error handling page for user consumption
                app.UseExceptionHandler("App/Error");
            }

            app.UseFileServer();

            app.UseMvc(config =>
            {
                config.MapRoute(
                    name: "Default",
                    template: "{controller}/{action}/{id?}",
                    defaults: new {controller = "App", action = "Index"}
                    );
            });

            app.Run(async context =>
            {
                await context.Response.WriteAsync("Hello World!");
            });

            // TODO: Eventually not needed?
            seeder.EnsureSeedData();
        }

        // Entry point for the application.
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }
}
