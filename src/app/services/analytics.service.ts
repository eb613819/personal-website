import { Injectable } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

declare let gtag: Function;

@Injectable({
  providedIn: 'root',
})
export class AnalyticsService {
  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event) => {
        this.sendPageView(event.urlAfterRedirects);
      });
  }

  sendPageView(url: string) {
    if (typeof gtag === 'function') {
      gtag('event', 'page_view', {
        page_path: url,
      });
    }
  }

  sendEvent(name: string, params: Record<string, any> = {}) {
    if (typeof gtag === 'function') {
      gtag('event', name, params);
    }
  }
}
