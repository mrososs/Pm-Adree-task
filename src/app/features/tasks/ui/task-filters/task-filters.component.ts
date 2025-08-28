import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import {
  TaskCategory,
  TaskStatus,
} from '../../../../../assets/mock-api/mock.db';
import { PrimeNgModule } from '../../../../shared/ui/prime-ng.module';

@Component({
  selector: 'app-task-filters',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './task-filters.component.html',
  styleUrls: ['./task-filters.component.scss'],
})
export class TaskFiltersComponent {
  @Input() searchTerm = signal('');
  @Input() selectedCategory = signal<TaskCategory | null>(null);
  @Input() selectedStatus = signal<TaskStatus | null>(null);

  // For ngModel binding
  _selectedCategory: TaskCategory | null = null;
  _selectedStatus: TaskStatus | null = null;

  @Output() searchTermChange = new EventEmitter<string>();
  @Output() selectedCategoryChange = new EventEmitter<TaskCategory | null>();
  @Output() selectedStatusChange = new EventEmitter<TaskStatus | null>();
  @Output() clearFilters = new EventEmitter<void>();

  categories: TaskCategory[] = ['Dev', 'Test', 'UI', 'Db'];
  statuses: TaskStatus[] = ['New', 'Active', 'Closed'];

  onSearchTermChange(value: string) {
    this.searchTermChange.emit(value);
  }

  onCategoryChange(value: TaskCategory | null) {
    this._selectedCategory = value;
    this.selectedCategoryChange.emit(value);
  }

  onStatusChange(value: TaskStatus | null) {
    this._selectedStatus = value;
    this.selectedStatusChange.emit(value);
  }

  onClearFilters() {
    this.clearFilters.emit();
  }
}
