import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private router: Router
  ) { }

  email = localStorage.getItem('email');
  name = localStorage.getItem('name');

  getSettings() {
    // Implementation for fetching settings
    this.router.navigate(['/settings']);
  }
}
