import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'https://localhost:7069/api/auth';

  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('uuid') ?? '';
  }

  fetchTokenFromApi() {
    return this.http.post(this.authUrl, {});
  }
}
