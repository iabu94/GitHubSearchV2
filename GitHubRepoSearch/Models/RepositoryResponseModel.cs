namespace GitHubRepoSearch.Models
{
    public class RepositoryResponseModel
    {
        public int Total_count { get; set; }
        public IList<RepositoryModel> Items { get; set; }
    }
}
