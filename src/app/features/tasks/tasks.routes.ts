import { Routes } from '@angular/router';

export const TASKS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/tasks-list/tasks-list.component').then(
        (m) => m.TasksListComponent
      ),
    title: 'Tasks',
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./pages/task-form/task-form.component').then(
        (m) => m.TaskFormComponent
      ),
    title: 'Create Task',
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./pages/task-form/task-form.component').then(
        (m) => m.TaskFormComponent
      ),
    title: 'Edit Task',
  },
];
