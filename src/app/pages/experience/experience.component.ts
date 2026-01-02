import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { experiences, Experience } from '../../data/experience';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
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
}
