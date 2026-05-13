import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  loginSuccess: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }


  login() {
    // console.log('Logging in with', this.loginForm);
    this.http.post('http://localhost:3000/login', this.loginForm.value).subscribe((response: any) => {
      console.log('Login response:', response);
      this.loginSuccess = true;

      setTimeout(() => {
        this.loginSuccess = false;
      }, 500);

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('email', response.user.email);
      localStorage.setItem('name', response.user.name);
      this.router.navigate(['/home']);

    });
  }

}
