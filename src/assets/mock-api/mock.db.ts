export type TaskCategory = 'Dev' | 'Test' | 'UI' | 'Db';
export type TaskStatus = 'New' | 'Active' | 'Closed';
export interface Task {
  id: string;
  title: string;
  description?: string;
  assignedTo?: string;
  dueDate?: string;
  estimatedHours?: number;
  category: TaskCategory;
  status: TaskStatus;
}
export interface MockDb {
  tasks: Task[];
  users: string[];
}
export const MOCK_DB: MockDb = {
  users: [
    'Mohamed Osama',
    'Radwa Mohamed',
    'Ali Hassan',
    'Sara Ibrahim',
    'Nour Ahmed',
    'Omar Farouk',
  ],
  tasks: [
    {
      id: 'T-1001',
      title: 'Setup Angular workspace & routing',
      description:
        'Create base app, setup standalone routes, provideHttpClient.',
      assignedTo: 'Mohamed Osama',
      dueDate: '2025-09-05',
      estimatedHours: 6,
      category: 'Dev',
      status: 'Active',
    },
    {
      id: 'T-1002',
      title: 'Create Task model & API layer',
      description: 'Define interfaces, api-client wrapper, feature TaskApi.',
      assignedTo: 'Ali Hassan',
      dueDate: '2025-09-06',
      estimatedHours: 5,
      category: 'Dev',
      status: 'Active',
    },
    {
      id: 'T-1003',
      title: 'Tasks list page (table)',
      description: 'List with sort, filter, trackBy, OnPush.',
      assignedTo: 'Sara Ibrahim',
      dueDate: '2025-09-07',
      estimatedHours: 8,
      category: 'UI',
      status: 'New',
    },
    {
      id: 'T-1004',
      title: 'Task create form + validation',
      description: 'Reactive form, errors, submit, toast on success.',
      assignedTo: 'Nour Ahmed',
      dueDate: '2025-09-07',
      estimatedHours: 7,
      category: 'UI',
      status: 'New',
    },
    {
      id: 'T-1005',
      title: 'Task edit page',
      description: 'Load by id, patch form, save & navigate back.',
      assignedTo: 'Omar Farouk',
      dueDate: '2025-09-08',
      estimatedHours: 5,
      category: 'UI',
      status: 'New',
    },
    {
      id: 'T-1006',
      title: 'Delete confirmation dialog',
      description: 'Confirm before delete, optimistic update.',
      assignedTo: 'Ali Hassan',
      dueDate: '2025-09-06',
      estimatedHours: 3,
      category: 'UI',
      status: 'Active',
    },
    {
      id: 'T-1007',
      title: 'Dashboard totals & charts',
      description: 'Totals, by status/category pie or bar.',
      assignedTo: 'Mohamed Osama',
      dueDate: '2025-09-08',
      estimatedHours: 6,
      category: 'UI',
      status: 'Active',
    },
    {
      id: 'T-1008',
      title: 'Add unit test for TaskApi',
      description: 'HttpClientTestingModule + one spec.',
      assignedTo: 'Sara Ibrahim',
      dueDate: '2025-09-09',
      estimatedHours: 3,
      category: 'Test',
      status: 'New',
    },
    {
      id: 'T-1009',
      title: 'Signal store for tasks',
      description: 'Load, add, update, remove with signals.',
      assignedTo: 'Ali Hassan',
      dueDate: '2025-09-09',
      estimatedHours: 5,
      category: 'Dev',
      status: 'Active',
    },
    {
      id: 'T-1010',
      title: 'Pagination / infinite scroll',
      description: 'MatPaginator or virtual scroll.',
      assignedTo: 'Nour Ahmed',
      dueDate: '2025-09-10',
      estimatedHours: 4,
      category: 'Dev',
      status: 'New',
    },
    {
      id: 'T-1011',
      title: 'DB migration script (mock)',
      description: 'Seed initial tasks & users.',
      assignedTo: 'Omar Farouk',
      dueDate: '2025-09-05',
      estimatedHours: 2,
      category: 'Db',
      status: 'Closed',
    },
    {
      id: 'T-1012',
      title: 'Accessibility pass',
      description: 'ARIA, keyboard nav, focus management.',
      assignedTo: 'Mohamed Osama',
      dueDate: '2025-09-11',
      estimatedHours: 4,
      category: 'UI',
      status: 'New',
    },
  ],
};
