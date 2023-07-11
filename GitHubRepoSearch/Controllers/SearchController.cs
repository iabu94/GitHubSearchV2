using GitHubRepoSearch.DTOs;
using GitHubRepoSearch.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace GitHubRepoSearch.Controllers
{
    //[Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : ControllerBase
    {
        private const string githubRepoApiUrl = "https://api.github.com/";
        private readonly HttpClient _httpClient;
        public SearchController(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient();
            _httpClient.BaseAddress = new Uri(githubRepoApiUrl);
            _httpClient.DefaultRequestHeaders.Add("User-Agent", "GitHubRepoSearch");
        }

        [HttpGet("{key}")]
        public async Task<IActionResult> SearchRepositories(string key)
        {
            try
            {
                var searchUrl = $"search/repositories?q={key}";
                var response = await _httpClient.GetAsync(searchUrl);

                response.EnsureSuccessStatusCode();

                var content = await response.Content.ReadAsStringAsync();

                var repositories = JsonConvert.DeserializeObject<RepositoryResponseModel>(content);

                var reposDto = repositories?.Items.Select(item => new RepositoryDto
                {
                    Id = item.Id,
                    Name = item.Name,
                    Avatar = item.Owner.Avatar_url
                });

                return Ok(reposDto);
            }
            catch (HttpRequestException ex)
            {
                // Handle any exception or error that occurred during the HTTP request
                return StatusCode(500, ex.Message);
            }
        }

    }
}
