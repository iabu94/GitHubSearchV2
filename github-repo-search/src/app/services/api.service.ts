import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  bookmarkRepository(repo: any, token: string): Observable<any> {
    const url = `${this.apiUrl}/repositories/${repo.id}/bookmark`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(url, {}, { headers });
  }

  getBookmarkedRepositories(token: string): Observable<any> {
    const url = `${this.apiUrl}/bookmarks`;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(url, { headers });
  }
}
