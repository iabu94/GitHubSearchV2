using GitHubRepoSearch.Contracts;
using GitHubRepoSearch.DTOs;

namespace GitHubRepoSearch.Services
{
    public class BookmarkService : IBookmarkService
    {
        public IList<BookmarkDto> Bookmarks { get; set; }
        public BookmarkService()
        {
            Bookmarks = new List<BookmarkDto>();
        }
        public void AddRepository(string userId, RepositoryDto repository)
        {
            if (!Bookmarks.Any(x => x.UserId == userId))
            {
                Bookmarks.Add(new BookmarkDto { UserId = userId, Repositories = new List<RepositoryDto>() });
            }

            var userRepos = Bookmarks.FirstOrDefault(x => x.UserId == userId);

            if (userRepos != null && userRepos.Repositories != null && !userRepos.Repositories.Any(r => r.Id == repository.Id))
            {
                userRepos.Repositories.Add(repository);
            }
        }

        public IList<RepositoryDto> GetRepositories(string userId)
        {
            var userRepos = Bookmarks.FirstOrDefault(r => r.UserId == userId);
            var repos = userRepos?.Repositories ?? new List<RepositoryDto>();
            return repos;
        }

        public RepositoryDto GetRepository(int id)
        {
            return null;
        }
    }
}
