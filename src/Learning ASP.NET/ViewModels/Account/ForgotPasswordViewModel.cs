using System.ComponentModel.DataAnnotations;

namespace Learning_ASP.NET.ViewModels.Account
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
