namespace GitHubRepoSearch.Models
{
    public class RepositoryModel
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public RepoUser? Owner { get; set; }
    }

    public class RepoUser
    {
        public int Id { get; set; }
        public string? Avatar_url { get; set; }
    }
}
