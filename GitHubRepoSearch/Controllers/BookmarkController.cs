using GitHubRepoSearch.Extensions;
using GitHubRepoSearch.Models;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace GitHubRepoSearch.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookmarkController : ControllerBase
    {
        [HttpPost]
        public IActionResult BookmarkRepository([FromBody] RepositoryModel repository)
        {
            // Store the repository in the user's session
            var bookmarkedRepositories = HttpContext.Session.Get<List<RepositoryModel>>("BookmarkedRepositories");
            bookmarkedRepositories ??= new List<RepositoryModel>();
            bookmarkedRepositories.Add(repository);
            HttpContext.Session.Set("BookmarkedRepositories", bookmarkedRepositories);

            return Ok();
        }

        [HttpGet]
        public IActionResult GetAllBookmarkedRepos() 
        {
            var bookmarkedRepos = HttpContext.Session.Get<List<RepositoryModel>>("BookmarkedRepositories");
            return Ok(bookmarkedRepos); 
        }

    }
}
