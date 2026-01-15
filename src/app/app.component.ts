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

  
  onClickDownloadResume() {
    this.analytics.sendEvent('resume_download', {
      method: 'navbar_button'
    });
  }
}
