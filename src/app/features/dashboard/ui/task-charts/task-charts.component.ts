import {
  Component,
  Input,
  OnInit,
  signal,
  effect,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TaskCategory,
  TaskStatus,
} from '../../../../../assets/mock-api/mock.db';
import { Chart, ChartConfiguration, ChartType, registerables } from 'chart.js';

@Component({
  selector: 'app-task-charts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-charts.component.html',
  styleUrls: ['./task-charts.component.scss'],
})
export class TaskChartsComponent
  implements OnInit, AfterViewInit, OnChanges, OnDestroy
{
  @Input() tasks: any[] = [];

  @ViewChild('statusChart', { static: false }) statusChartRef!: ElementRef;
  @ViewChild('categoryChart', { static: false }) categoryChartRef!: ElementRef;

  private statusChart: Chart | null = null;
  private categoryChart: Chart | null = null;

  constructor() {
    Chart.register(...registerables);

    // Effect to update charts when tasks change
    effect(() => {
      const currentTasks = this.tasks;
      console.log('Task charts tasks changed:', currentTasks);
      if (this.statusChart && this.categoryChart) {
        this.updateCharts();
      }
    });
  }

  ngOnInit() {
    console.log('Task charts component initialized with tasks:', this.tasks);
  }

  ngAfterViewInit() {
    console.log('Task charts after view init');
    this.initializeCharts();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Task charts changes:', changes);
    if (changes['tasks'] && this.statusChart && this.categoryChart) {
      this.updateCharts();
    }
  }

  private initializeCharts() {
    if (this.statusChartRef && this.categoryChartRef) {
      console.log('Initializing charts');
      this.createStatusChart();
      this.createCategoryChart();
    }
  }

  private createStatusChart() {
    const ctx = this.statusChartRef.nativeElement.getContext('2d');

    const statusCounts = this.getStatusCounts();
    const isDark = document.documentElement.classList.contains('dark');

    console.log('Creating status chart with data:', statusCounts);

    this.statusChart = new Chart(ctx, {
      type: 'pie' as ChartType,
      data: {
        labels: ['New', 'Active', 'Closed'],
        datasets: [
          {
            data: [statusCounts.New, statusCounts.Active, statusCounts.Closed],
            backgroundColor: ['#3b82f6', '#10b981', '#6b7280'],
            borderWidth: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              usePointStyle: true,
              padding: 20,
              color: isDark ? '#e5e7eb' : '#374151',
            },
          },
        },
      },
    });
  }

  private createCategoryChart() {
    const ctx = this.categoryChartRef.nativeElement.getContext('2d');

    const categoryCounts = this.getCategoryCounts();
    const isDark = document.documentElement.classList.contains('dark');

    console.log('Creating category chart with data:', categoryCounts);

    this.categoryChart = new Chart(ctx, {
      type: 'bar' as ChartType,
      data: {
        labels: ['Dev', 'Test', 'UI', 'Db'],
        datasets: [
          {
            label: 'Tasks by Category',
            data: [
              categoryCounts.Dev,
              categoryCounts.Test,
              categoryCounts.UI,
              categoryCounts.Db,
            ],
            backgroundColor: ['#8b5cf6', '#f59e0b', '#ec4899', '#6366f1'],
            borderColor: ['#7c3aed', '#d97706', '#db2777', '#4f46e5'],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 1,
              color: isDark ? '#e5e7eb' : '#6b7280',
            },
            grid: {
              color: isDark ? '#374151' : '#e5e7eb',
            },
          },
          x: {
            ticks: {
              color: isDark ? '#e5e7eb' : '#6b7280',
            },
            grid: {
              display: false,
            },
          },
        },
      },
    });
  }

  private getStatusCounts() {
    const counts = { New: 0, Active: 0, Closed: 0 };
    this.tasks.forEach((task) => {
      counts[task.status as TaskStatus]++;
    });
    console.log('Status counts:', counts);
    return counts;
  }

  private getCategoryCounts() {
    const counts = { Dev: 0, Test: 0, UI: 0, Db: 0 };
    this.tasks.forEach((task) => {
      counts[task.category as TaskCategory]++;
    });
    console.log('Category counts:', counts);
    return counts;
  }

  private updateCharts() {
    console.log('Updating charts');
    const statusCounts = this.getStatusCounts();
    const categoryCounts = this.getCategoryCounts();

    if (this.statusChart) {
      this.statusChart.data.datasets[0].data = [
        statusCounts.New,
        statusCounts.Active,
        statusCounts.Closed,
      ];
      this.statusChart.update();
    }

    if (this.categoryChart) {
      this.categoryChart.data.datasets[0].data = [
        categoryCounts.Dev,
        categoryCounts.Test,
        categoryCounts.UI,
        categoryCounts.Db,
      ];
      this.categoryChart.update();
    }
  }

  ngOnDestroy() {
    console.log('Task charts component destroying');
    if (this.statusChart) {
      this.statusChart.destroy();
    }
    if (this.categoryChart) {
      this.categoryChart.destroy();
    }
  }
}
