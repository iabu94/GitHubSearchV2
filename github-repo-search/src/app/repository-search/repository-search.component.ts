import { Component } from '@angular/core';
import { Repository } from '../models';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-repository-search',
  templateUrl: './repository-search.component.html',
  styleUrls: ['./repository-search.component.scss']
})
export class RepositorySearchComponent {
  searchKeyword: string = '';
  repositories: Repository[] = [];

  constructor(private apiService: ApiService, private authService: AuthService) { }

  search() {
    this.apiService.searchRepositories(this.searchKeyword).subscribe((data: Repository[]) => {
      this.repositories = data;
    });
  }

  bookmark(repo: Repository) {
    this.apiService.bookmarkRepository(repo).subscribe(() => {
      // Handle success or error response
    });
  }
}
