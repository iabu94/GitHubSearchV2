import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent {
  bookmarkedRepositories: any[] = [];

  constructor(private apiService: ApiService, private authService: AuthService) { }

  ngOnInit() {
    this.apiService.getBookmarkedRepositories(this.authService.getToken()).subscribe((data: any) => {
      this.bookmarkedRepositories = data;
    });
  }
}
