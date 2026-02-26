import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';
import { AnalyticsService } from './services/analytics.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private analytics: AnalyticsService) {}
  
  title = 'personal_website';
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
  
  onClickDownloadResume() {
    this.analytics.sendEvent('resume_download', {
      method: 'navbar_button'
    });
  }
}
