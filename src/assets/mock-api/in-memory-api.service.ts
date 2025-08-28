import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MOCK_DB } from './mock.db';

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

  // Override genId to ensure unique IDs
  genId<T extends { id?: string }>(collection: T[]): string {
    if (collection.length === 0) return 'T-1001';
    const maxId = Math.max(...collection.map(item => parseInt(item.id?.replace('T-', '') || '0')));
    return `T-${maxId + 1}`;
  }
}
