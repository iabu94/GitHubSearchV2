using GitHubRepoSearch.Contracts;
using GitHubRepoSearch.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace GitHubRepoSearch.Controllers;

[Authorize]
[Route("api/[controller]")]
[ApiController]
public class BookmarkController : ControllerBase
{
    private readonly IBookmarkService _bookmarkService;

    public BookmarkController(IBookmarkService bookmarkService)
    {
        _bookmarkService = bookmarkService;
    }

    [HttpPost]
    public IActionResult BookmarkRepository([FromBody] RepositoryDto repository)
    {
        var userIdentifier = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (userIdentifier == null)
        {
            return BadRequest();
        }
        _bookmarkService.AddRepository(userIdentifier, repository);
        return Ok();
    }

    [HttpGet]
    public IActionResult GetAllBookmarkedRepos() 
    {
        var nameIdentifier = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        if (nameIdentifier == null)
        {
            return BadRequest();
        }
        return Ok(_bookmarkService.GetRepositories(nameIdentifier)); 
    }

}
