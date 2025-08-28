import { Component, OnInit, inject, signal } from '@angular/core';
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

  ngOnInit() {
    this.taskApi.load().subscribe({
      next: (tasks) => {
        console.log('Tasks loaded:', tasks);
      },
      error: (error) => {
        console.error('Error loading tasks:', error);
      },
    });
  }
}
