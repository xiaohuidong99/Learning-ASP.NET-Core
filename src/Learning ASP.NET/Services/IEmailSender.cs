using System.Threading.Tasks;

namespace Learning_ASP.NET.Services
{
    public interface IEmailSender
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
