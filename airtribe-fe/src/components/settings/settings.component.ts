import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {
  settings: any[] = [];
  selectedSetting = '';
  preferences: any = null;
  loading = false;
  error = '';

  constructor(private http: HttpClient, private router: Router) { }

  onSettingClick() {
    if (!this.settings.length) {
      this.loadSettings();
    }
  }

  onPreferencesClick() {
    this.router.navigate(['/settings/preferences', this.selectedSetting]);
  }
  onSettingChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedSetting = target.value;
    this.fetchPreferences(target.value);
  }

  loadSettings() {
    this.loading = true;
    this.error = '';

    this.http.get<any[]>('http://localhost:3000/settings').subscribe({
      next: response => {
        this.settings = response || [];
        if (this.settings.length) {
          this.selectedSetting = this.getOptionValue(this.settings[0]);
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to load settings list. Please try again.';
        this.loading = false;
      }
    });
  }

  fetchPreferences(setting: string) {
    if (!setting) {
      return;
    }

    this.loading = true;
    this.error = '';
    this.preferences = null;

    this.http.get(`http://localhost:3000/settings/${setting}`).subscribe({
      next: response => {
        this.preferences = response;
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to load preferences. Please try again.';
        this.loading = false;
      }
    });
  }

  getOptionLabel(setting: any): string {
    if (typeof setting === 'string') {
      return setting;
    }
    return setting.label || setting.name || setting.value || 'Unknown';
  }

  getOptionValue(setting: any): string {
    if (typeof setting === 'string') {
      return setting;
    }
    return setting.value || setting.id || setting.name || setting.label || '';
  }
}

