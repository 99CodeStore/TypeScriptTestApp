using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using TypeScriptTestApp.Models;

namespace TypeScriptTestApp.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

    [HttpGet]
    public IActionResult Contact()
    {
        return View();
    }

    [HttpPost]
    public IActionResult Contact(ContactViewModel contactVM)
    {
        if (ModelState.IsValid)
        {
            // Send an email or save the message in a table...
            // Redirect to a page that says "Thanks for contacting us!"...

            return RedirectToAction("Index");
        }

        return View();
    }

}
