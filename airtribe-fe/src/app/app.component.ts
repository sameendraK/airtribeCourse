import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewsAggregatorComponent } from '../components/news-aggregator/news-aggregator.component';
import { CreateUserComponent } from '../components/create-user/create-user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CreateUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'airtribe-fe';
}
