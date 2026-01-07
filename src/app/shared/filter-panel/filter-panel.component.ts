import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterGroup, FilterState } from './filter.model';

@Component({
  selector: 'app-filter-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-panel.component.html',
  styleUrl: './filter-panel.component.css'
})
export class FilterPanelComponent {
  @Input() groups: FilterGroup[] = [];
  @Input() state: FilterState = {};

  @Output() stateChange = new EventEmitter<FilterState>();
  @Output() clear = new EventEmitter<void>();

  collapsed = false;
  
  toggle(groupKey: string, value: string) {
    const current: string[] = this.state[groupKey] ?? [];

    const updated: string[] = current.includes(value)
      ? current.filter((v: string) => v !== value)
      : [...current, value];

    this.stateChange.emit({
      ...this.state,
      [groupKey]: updated
    });
  }

  isSelected(groupKey: string, value: string): boolean {
    return this.state[groupKey]?.includes(value) ?? false;
  }
}
