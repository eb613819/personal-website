import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { experiences, Experience, ExperienceType } from '../../data/experience';
import { FilterGroup, FilterState } from '../../shared/filter-panel/filter.model';
import { FilterPanelComponent } from '../../shared/filter-panel/filter-panel.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, FilterPanelComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences: Experience[];

  expandedCards: Set<Experience> = new Set();

  constructor() {
    //Sort by endDate descending. 'Present' is newest
    this.experiences = experiences.sort((a, b) => {
      const getDate = (d: string) => d.toLowerCase() === 'present' ? new Date() : new Date(d);
      return getDate(b.endDate).getTime() - getDate(a.endDate).getTime();
    });
  }

  toggleCard(exp: Experience) {
    if (this.expandedCards.has(exp)) {
      this.expandedCards.delete(exp);
    } else {
      this.expandedCards.add(exp);
    }
  }

  isExpanded(exp: Experience): boolean {
    return this.expandedCards.has(exp);
  }

  //Filter logic
  filterState: FilterState = {};

  filterGroups: FilterGroup[] = [
    {
      key: 'type',
      label: 'Experience Type',
      multi: true,
      options: (['job', 'research', 'teaching', 'education'] as ExperienceType[])
        .map((t: ExperienceType) => ({
          label: t,
          value: t
        }))
    },
    {
      key: 'tags',
      label: 'Tags',
      multi: true,
      options: Array.from(
        new Set(experiences.flatMap(e => e.tags ?? []))
      ).map((t: string) => ({
        label: t,
        value: t
      }))
    }
  ];

  get filteredExperiences(): Experience[] {
    return this.experiences.filter(exp => {
      const types = this.filterState['type'] as ExperienceType[] | undefined;
      const tags = this.filterState['tags'] as string[] | undefined;

      if (types?.length && !types.includes(exp.type)) return false;
      if (tags?.length && !tags.some(t => exp.tags?.includes(t))) return false;

      return true;
    });
  }
}
