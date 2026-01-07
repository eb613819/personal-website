import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects, Project } from '../../data/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[];
  expandedProject: Project | null = null;

  constructor() {
    this.projects = projects.sort((a, b) => {
      const statusOrder = (s: Project['status']) => {
        if (s === 'Completed') return 0;
        if (s === 'In Progress') return 1;
        return 2; //Not Started
      };

      const statusDiff = statusOrder(a.status) - statusOrder(b.status);
      if (statusDiff !== 0) return statusDiff;

      if (a.status === 'Completed' && b.status === 'Completed') {
        if (!a.completionDate || !b.completionDate) return 0;
        return (
          new Date(b.completionDate).getTime() -
          new Date(a.completionDate).getTime()
        );
      }

      return 0;
    });
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
    return 'type-' + type.toLowerCase().replace(/[\s]/g, '').replace(/[\s\/]/g, '-');
  }
}
