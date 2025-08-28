import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss'],
})
export class StatsCardComponent {
  @Input() title!: string;
  @Input() value!: string | number;
  @Input() icon!: string;
  @Input() color: 'blue' | 'green' | 'yellow' | 'red' | 'purple' = 'blue';
  @Input() trend?: {
    value: number;
    isPositive: boolean;
  };

  getIconBgClass(): string {
    const colorMap = {
      blue: 'bg-blue-100 dark:bg-blue-900',
      green: 'bg-green-100 dark:bg-green-900',
      yellow: 'bg-yellow-100 dark:bg-yellow-900',
      red: 'bg-red-100 dark:bg-red-900',
      purple: 'bg-purple-100 dark:bg-purple-900',
    };
    return colorMap[this.color];
  }

  getIconColorClass(): string {
    const colorMap = {
      blue: 'text-blue-600 dark:text-blue-400',
      green: 'text-green-600 dark:text-green-400',
      yellow: 'text-yellow-600 dark:text-yellow-400',
      red: 'text-red-600 dark:text-red-400',
      purple: 'text-purple-600 dark:text-purple-400',
    };
    return colorMap[this.color];
  }
}
