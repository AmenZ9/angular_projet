import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  showNavbar = true;

  constructor(private router: Router
  ) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {

        const hiddenRoutes = ['/login', '/register'];

        this.showNavbar = !hiddenRoutes.includes(event.urlAfterRedirects);
      }
    });

  }

  isAdmin(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return user.role === 'ADMIN';
  }

  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
