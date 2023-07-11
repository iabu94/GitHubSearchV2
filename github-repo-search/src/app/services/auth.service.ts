import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToken(): string {
    // Implement the logic to retrieve the JWT token from session or local storage
    return 'your-token-here';
  }
}
