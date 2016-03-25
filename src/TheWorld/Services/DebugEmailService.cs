using System.Diagnostics;

namespace TheWorld.Services
{
    public class DebugEmailService : IEmailService
    {
        public bool SendEmail(string to, string from, string subject, string body)
        {
            Debug.Write($"FROM:\t\t{from}\n" +
                        $"TO:\t\t\t{to}\n" +
                        $"SUBJECT:\t{subject}\n\n" +
                        $"{body}\n");

            return true;
        }
    }
}