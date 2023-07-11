import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent {
  bookmarkedRepositories: any[] = [];

  constructor(private apiService: ApiService) { 
    this.apiService.getBookmarkedRepositories().subscribe((data: any) => {
      this.bookmarkedRepositories = data;
    });
  }
}
