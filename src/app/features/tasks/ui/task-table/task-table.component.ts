import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  Task,
  TaskCategory,
  TaskStatus,
} from '../../../../../assets/mock-api/mock.db';
import { PrimeNgModule } from '../../../../shared/ui/prime-ng.module';

@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [RouterLink, PrimeNgModule],
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss'],
})
export class TaskTableComponent {
  @Input() tasks: Task[] = [];
  @Output() deleteTask = new EventEmitter<Task>();

  // Dialog state
  showViewDialog = signal(false);
  selectedTask = signal<Task | null>(null);

  getStatusClass(status: TaskStatus): string {
    switch (status) {
      case 'New':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Active':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Closed':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  }

  getCategoryClass(category: TaskCategory): string {
    switch (category) {
      case 'Dev':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Test':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'UI':
        return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300';
      case 'Db':
        return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
    }
  }

  onViewTask(task: Task) {
    this.selectedTask.set(task);
    this.showViewDialog.set(true);
  }

  onDeleteTask(task: Task) {
    this.deleteTask.emit(task);
  }

  closeViewDialog() {
    this.showViewDialog.set(false);
    this.selectedTask.set(null);
  }
}
