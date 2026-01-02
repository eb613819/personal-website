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
      const getDate = (d: string) => new Date(d);
      return getDate(b.completionDate).getTime() - getDate(a.completionDate).getTime();
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
}
