import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectStatus, ProjectType } from '../../interfaces/project.interface';
import { FilterGroup, FilterState } from '../../shared/filter-panel/filter.model';
import { FilterPanelComponent } from '../../shared/filter-panel/filter-panel.component';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from "./project-card/project-card.component";
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FilterPanelComponent, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [];
  
  // filter state
  filterState: FilterState = {};

  constructor(private titleService: Title, private dataService: DataService) {
    this.titleService.setTitle('Projects | Evan Brooks Portfolio');
  }

  ngOnInit() {
    this.dataService.getProjects().subscribe((data) => {
      this.projects = [...data].sort((a, b) => {
        const statusOrder = (s: string) => {
          if (s === 'Completed') return 0;
          if (s === 'In Progress') return 1;
          return 2; // Not Started
        };

        const statusDiff = statusOrder(a.status) - statusOrder(b.status);
        if (statusDiff !== 0) return statusDiff;

        if (a.status === 'Completed' && b.status === 'Completed') {
          if (!a.completionDate || !b.completionDate) return 0;
          return new Date(b.completionDate).getTime() - new Date(a.completionDate).getTime();
        }

        return 0;
      });
    });
  }

  get filterGroups(): FilterGroup[] {
    return [
      {
        key: 'types',
        label: 'Project Type',
        multi: true,
        options: Array.from(
          new Set(this.projects.flatMap((p: Project) => p.types))
        ).map((t: ProjectType) => ({ label: t, value: t }))
      },
      {
        key: 'status',
        label: 'Status',
        multi: true,
        options: (['Completed', 'In Progress', 'Not Started'] as ProjectStatus[])
          .map((s: ProjectStatus) => ({ label: s, value: s }))
      },
      {
        key: 'tags',
        label: 'Tags',
        multi: true,
        options: Array.from(
          new Set(this.projects.flatMap(p => p.tags ?? []))
        ).map(t => ({ label: t, value: t }))
      }
    ];
  }

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
