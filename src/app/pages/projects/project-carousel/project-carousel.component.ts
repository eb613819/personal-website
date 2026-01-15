import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-carousel.component.html',
  styleUrl: './project-carousel.component.css'
})
export class ProjectCarouselComponent {
  @Input() images: string[] = [];
  @Input() expanded = false;
  
  currentIndex = 0;

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }
}
