import { Component, OnDestroy, OnInit } from '@angular/core';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }, JwtHelperService]
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private jwtHelper: JwtHelperService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('uuid');

    if (!token || this.jwtHelper.isTokenExpired(token)) {
      this.authService.fetchTokenFromApi().subscribe((res: any) => {
        localStorage.setItem('uuid', res.token);
      });
    }
  }
  
  ngOnDestroy(): void {
    localStorage.removeItem('githubsearchkey');
  }
}
