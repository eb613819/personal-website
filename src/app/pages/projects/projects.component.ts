import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { projects, Project, ProjectStatus, ProjectType } from '../../data/project';
import { FilterGroup, FilterState } from '../../shared/filter-panel/filter.model';
import { FilterPanelComponent } from '../../shared/filter-panel/filter-panel.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FilterPanelComponent],
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

  //Filter logic
  filterState: FilterState = {};

  filterGroups: FilterGroup[] = [
    {
      key: 'types',
      label: 'Project Type',
      multi: true,
      options: Array.from(
        new Set(projects.flatMap((p: Project) => p.types))
      ).map((t: ProjectType) => ({
        label: t,
        value: t
      }))
    },
    {
      key: 'status',
      label: 'Status',
      multi: true,
      options: (['Completed', 'In Progress', 'Not Started'] as ProjectStatus[])
        .map((s: ProjectStatus) => ({
          label: s,
          value: s
        }))
    },
    {
      key: 'tags',
      label: 'Tags',
      multi: true,
      options: Array.from(
        new Set(projects.flatMap(p => p.tags ?? []))
      ).map(t => ({ label: t, value: t }))
    }
  ];

  get filteredProjects(): Project[] {
    return this.projects.filter(p => {
      const types = this.filterState['types'] as ProjectType[] | undefined;
      const status = this.filterState['status'] as ProjectStatus[] | undefined;
      const tags = this.filterState['tags'] as string[] | undefined;

      if (types?.length && !types.some(t => p.types.includes(t))) return false;
      if (status?.length && !status.includes(p.status)) return false;
      if (tags?.length && !tags.some(t => p.tags?.includes(t))) return false;

      return true;
    });
  }
}
