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


}
