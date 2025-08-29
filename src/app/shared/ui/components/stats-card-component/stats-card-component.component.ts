import {
  Component,
  ChangeDetectionStrategy,
  computed,
  input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface StatsCardConfig {
  title: string;
  value: number | string;
  subtitle?: string;
  icon?: string; // e.g. 'pi pi-file'
  gradientClass?: string; // e.g. 'from-blue-600 to-indigo-600'
  badgeBgClass?: string; // e.g. 'from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50'
  hoverScale?: boolean;
  ariaLabel?: string;
}

@Component({
  selector: 'app-shared-stats-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-card-component.component.html',
  styleUrls: ['./stats-card-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharedStatsCardComponent {
  // Signal Input (Angular 17+)
  config = input.required<StatsCardConfig>();

  private readonly fallbackGradient = 'from-gray-600 to-gray-700';
  private readonly fallbackFrom = 'from-gray-600';
  private readonly fallbackTo = 'to-gray-700';

  // class for the outer right badge background
  badgeBg = computed(
    () =>
      this.config()?.badgeBgClass ??
      'from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600'
  );

  // full gradient string (safe)
  gradient = computed(
    () => this.config()?.gradientClass ?? this.fallbackGradient
  );

  // split gradient into 'from-*' and 'to-*' safely
  fromClass = computed(
    () => this.pickToken(this.gradient(), 'from-') ?? this.fallbackFrom
  );
  toClass = computed(
    () => this.pickToken(this.gradient(), 'to-') ?? this.fallbackTo
  );

  // icon class
  iconClass = computed(() => this.config()?.icon || 'pi pi-info-circle');

  // hover enabled?
  hoverOn = computed(() => this.config()?.hoverScale !== false);

  // aria
  label = computed(
    () =>
      this.config()?.ariaLabel ?? `${this.config()?.title ?? 'Statistic'} card`
  );

  /** helper: get token starting with key from a space-separated class string */
  private pickToken(klass: string, key: 'from-' | 'to-'): string | undefined {
    return (klass || '').split(' ').find((t) => t.startsWith(key));
  }
}
