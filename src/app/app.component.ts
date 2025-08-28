import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent, NavbarComponent } from './shared/ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, SidebarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pm-app';
  sidebarOpen = signal(false);
  isDarkMode = signal(false);

  toggleSidebar() {
    this.sidebarOpen.update((open) => !open);
  }

  toggleTheme() {
    this.isDarkMode.update((mode) => !mode);
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.add('my-app-dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.remove('my-app-dark');
    }
  }
}
