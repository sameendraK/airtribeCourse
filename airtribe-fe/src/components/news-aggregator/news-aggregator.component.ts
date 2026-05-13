import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-news-aggregator',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './news-aggregator.component.html',
  styleUrl: './news-aggregator.component.scss'
})
export class NewsAggregatorComponent {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3000';

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  });

  createUser() {
    this.http.post(`${this.baseUrl}/create`, this.userForm.value).subscribe(response => {
      console.log('User created:', response);
    });

  }
  getPreferences(){
    console.log('Fetching preferences...');
  }
}
