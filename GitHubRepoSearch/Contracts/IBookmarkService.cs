using GitHubRepoSearch.DTOs;

namespace GitHubRepoSearch.Contracts
{
    public interface IBookmarkService
    {
        void AddRepository(string userId, RepositoryDto repository);
        RepositoryDto GetRepository(int id);
        IList<RepositoryDto> GetRepositories(string userId);
    }
}
