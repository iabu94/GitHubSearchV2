namespace GitHubRepoSearch.DTOs
{
    public class BookmarkDto
    {
        public string? UserId { get; set; }
        public IList<RepositoryDto>? Repositories { get; set; }
    }
}
