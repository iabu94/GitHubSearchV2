import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Repository } from '../models';
import { ApiService } from '../services/api.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-repository-search',
  templateUrl: './repository-search.component.html',
  styleUrls: ['./repository-search.component.scss']
})
export class RepositorySearchComponent implements OnInit {
  searchKeyword: string = '';
  repositories: Repository[] = [];
  loading$ = new BehaviorSubject(false);

  constructor(private apiService: ApiService, private notification: NotificationService) { }
  
  ngOnInit(): void {
    // this.searchKeyword = sessionStorage.getItem('githubsearchkey') ?? '';
    // this.search();
  }

  search() {
    this.loading$.next(true);
    if (!this.searchKeyword) {
      this.notification.error('Keyword is required.');
      this.loading$.next(false);
      return;
    }
    this.apiService.searchRepositories(this.searchKeyword).subscribe((data: Repository[]) => {
      this.repositories = data;
      this.loading$.next(false);
    }, (error) => {
      this.notification.error(error);
      this.loading$.next(false);
    });
  }

  bookmark(repo: Repository) {
    this.loading$.next(true);
    this.apiService.bookmarkRepository(repo).subscribe(() => {
      this.notification.success('Bookmarked success.')
      this.loading$.next(false);
    });
  }

  setKey() {
    sessionStorage.setItem('githubsearchkey', this.searchKeyword);
  }
}
