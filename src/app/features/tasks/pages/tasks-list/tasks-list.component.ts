import { Component, OnInit, inject, signal, effect } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TaskApiService } from '../../data-access/task-api.service';
import {
  Task,
  TaskCategory,
  TaskStatus,
} from '../../../../../assets/mock-api/mock.db';
import { PrimeNgModule } from '../../../../shared/ui/prime-ng.module';
import { TaskFiltersComponent, TaskTableComponent } from '../../ui';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  imports: [
    RouterLink,
    PrimeNgModule,
    TaskFiltersComponent,
    TaskTableComponent,
  ],
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  private taskApi = inject(TaskApiService);
  private messageService = inject(MessageService);
  private confirmationService = inject(ConfirmationService);

  tasks = this.taskApi.tasks;
  stats = this.taskApi.stats;

  // Filter properties
  searchTerm = signal('');
  selectedCategory = signal<TaskCategory | null>(null);
  selectedStatus = signal<TaskStatus | null>(null);

  // Dropdown options
  categories: TaskCategory[] = ['Dev', 'Test', 'UI', 'Db'];
  statuses: TaskStatus[] = ['New', 'Active', 'Closed'];

  constructor() {
    // Effect to log when tasks change
    effect(() => {
      const currentTasks = this.tasks();
      console.log('Tasks list tasks changed:', currentTasks);
    });

    // Effect to log when stats change
    effect(() => {
      const currentStats = this.stats();
      console.log('Tasks list stats changed:', currentStats);
    });
  }

  ngOnInit() {
    console.log('Tasks list component initialized');
    this.taskApi.load().subscribe({
      next: (tasks) => {
        console.log('Tasks loaded in list:', tasks);
      },
      error: (error) => {
        console.error('Error loading tasks in list:', error);
      },
    });
  }

  get filteredTasks() {
    let filtered = this.tasks();

    if (this.searchTerm()) {
      const term = this.searchTerm().toLowerCase();
      filtered = filtered.filter(
        (task) =>
          task.title.toLowerCase().includes(term) ||
          task.description?.toLowerCase().includes(term) ||
          task.assignedTo?.toLowerCase().includes(term)
      );
    }

    if (this.selectedCategory()) {
      filtered = filtered.filter(
        (task) => task.category === this.selectedCategory()
      );
    }

    if (this.selectedStatus()) {
      filtered = filtered.filter(
        (task) => task.status === this.selectedStatus()
      );
    }

    return filtered;
  }

  confirmDelete(task: Task) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete the task "${task.title}"?`,
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteTask(task);
      },
      reject: () => {
        this.messageService.add({
          severity: 'info',
          summary: 'Cancelled',
          detail: 'Task deletion cancelled',
        });
      },
    });
  }

  deleteTask(task: Task) {
    this.taskApi.remove(task.id).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Task deleted successfully',
        });
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Failed to delete task',
        });
      },
    });
  }

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

  clearFilters() {
    this.searchTerm.set('');
    this.selectedCategory.set(null);
    this.selectedStatus.set(null);
  }
}
