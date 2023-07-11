import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://localhost:7069/api';

  constructor(private http: HttpClient) { }

  searchRepositories(keyword: string): Observable<Repository[]> {
    const url = `${this.apiUrl}/search/${keyword}`;
    return this.http.get<Repository[]>(url);
  }

  bookmarkRepository(repo: Repository): Observable<any> {
    const url = `${this.apiUrl}/bookmark`;
    return this.http.post(url, repo);
  }

  getBookmarkedRepositories(): Observable<Repository[]> {
    const url = `${this.apiUrl}/bookmark`;
    return this.http.get<Repository[]>(url);
  }
}
