using System.Threading.Tasks;

namespace Learning_ASP.NET.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
