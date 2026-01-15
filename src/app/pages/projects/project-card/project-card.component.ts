import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../../data/project';
import { ProjectCarouselComponent } from '../project-carousel/project-carousel.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, ProjectCarouselComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() projects!: Project[];
  expandedProject: Project | null = null;

  stop(e: Event) {
    e.stopPropagation();
  }

  toggleCard(proj: Project) {
    if (this.expandedProject === proj) {
      this.expandedProject = null; 
    } else {
      this.expandedProject = proj; 
    }
  }

  isExpanded(proj: Project): boolean {
    return this.expandedProject === proj;
  }

  getTypeClass(type: string): string {
    return 'type-' + type.toLowerCase().replace(/[\s\/]/g, '-');
  }
}

