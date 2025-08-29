import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MOCK_DB, Task } from './mock.db';

@Injectable({
  providedIn: 'root',
})
export class InMemoryApiService implements InMemoryDbService {
  createDb() {
    return {
      tasks: MOCK_DB.tasks,
      users: MOCK_DB.users,
    };
  }
  genId(tasks: Task[]): string {
    if (!tasks || tasks.length === 0) return 'T-1001';
    const nums = tasks
      .map((t) => parseInt(String(t.id).split('-')[1], 10))
      .filter((n) => !Number.isNaN(n));
    const next = (Math.max(...nums) || 1000) + 1;
    return `T-${next}`;
  }
}
