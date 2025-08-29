import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsCardConfig } from '../../../../shared/constants/interfaces/StatsCardConfig.model';
import { SharedStatsCardComponent } from '../../../../shared/ui/components/stats-card-component/stats-card-component.component';

@Component({
  selector: 'app-stats-overview',
  standalone: true,
  imports: [SharedStatsCardComponent],
  templateUrl: './stats-overview.component.html',
  styleUrls: ['./stats-overview.component.scss'],
})
export class StatsOverviewComponent implements OnChanges{
  @Input() stats: any = {};
  cards: StatsCardConfig[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    this.cards = [
      {
        title: 'Total Tasks',
        value: this.stats?.total ?? 0,
        subtitle: 'All project tasks',
        icon: 'pi pi-file',
        gradientClass: 'from-blue-600 to-indigo-600',
        badgeBgClass: 'from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50',
        hoverScale: true,
        ariaLabel: 'Total tasks card',
      },
      {
        title: 'Active Tasks',
        value: this.stats?.byStatus?.['Active'] ?? 0,
        subtitle: 'Currently in progress',
        icon: 'pi pi-check-circle',
        gradientClass: 'from-green-600 to-emerald-600',
        badgeBgClass: 'from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50',
        hoverScale: true,
        ariaLabel: 'Active tasks card',
      },
      {
        title: 'New Tasks',
        value: this.stats?.byStatus?.['New'] ?? 0,
        subtitle: 'Awaiting start',
        icon: 'pi pi-clock',
        gradientClass: 'from-purple-600 to-pink-600',
        badgeBgClass: 'from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50',
        hoverScale: true,
        ariaLabel: 'New tasks card',
      },
      {
        title: 'Completed',
        value: this.stats?.byStatus?.['Closed'] ?? 0,
        subtitle: 'Successfully finished',
        icon: 'pi pi-check',
        gradientClass: 'from-gray-600 to-gray-700',
        badgeBgClass: 'from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600',
        hoverScale: true,
        ariaLabel: 'Closed tasks card',
      },
    ];
  }
  

  getStatusClass(status: string): string {
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
}
