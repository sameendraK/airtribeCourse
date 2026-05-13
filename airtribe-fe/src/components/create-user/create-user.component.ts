import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  baseUrl = 'http://localhost:3000';

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  createUser() {
    this.http.post(`${this.baseUrl}/create`, this.userForm.value).subscribe(response => {
      console.log('User created:', response);
      this.router.navigate(['/login']);
    });

  }
  getPreferences() {
    console.log('Fetching preferences...');
  }
}
