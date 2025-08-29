import { Component, OnInit, inject, signal, effect } from '@angular/core';
import { TaskApiService } from '../../../tasks/data-access/task-api.service';
import {
  StatsOverviewComponent,
  TaskChartsComponent,
  TaskListsComponent,
} from '../../ui';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatsOverviewComponent, TaskChartsComponent, TaskListsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  private taskApi = inject(TaskApiService);

  tasks = this.taskApi.tasks;
  stats = this.taskApi.stats;

  constructor() {
    // Effect to log when tasks change
    effect(() => {
      const currentTasks = this.tasks();
      console.log('Dashboard tasks changed:', currentTasks);
    });

    // Effect to log when stats change
    effect(() => {
      const currentStats = this.stats();
      console.log('Dashboard stats changed:', currentStats);
    });
  }

  ngOnInit() {
    console.log('Dashboard component initialized');
    this.taskApi.load().subscribe({
      next: (tasks) => {
        console.log('Tasks loaded in dashboard:', tasks);
      },
      error: (error) => {
        console.error('Error loading tasks in dashboard:', error);
      },
    });
  }
}
