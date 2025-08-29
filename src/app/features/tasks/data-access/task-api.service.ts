import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Task } from '../../../../assets/mock-api/mock.db';
import { tap, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskApiService {
  private http = inject(HttpClient);
  private base = '/api/tasks';
  private readonly _tasks = signal<Task[]>([]);
  readonly tasks = computed(() => this._tasks());
  readonly stats = computed(() => {
    const tasks = this._tasks();
    console.log('Computing stats for tasks:', tasks);
    return {
      total: tasks.length,
      byStatus: tasks.reduce((acc, t) => {
        acc[t.status] = (acc[t.status] ?? 0) + 1;
        return acc;
      }, {} as Record<string, number>),
      byCategory: tasks.reduce((acc, t) => {
        acc[t.category] = (acc[t.category] ?? 0) + 1;
        return acc;
      }, {} as Record<string, number>),
    };
  });

  load() {
    console.log('Loading tasks from:', this.base);
    return this.http.get<Task[]>(this.base).pipe(
      tap((tasks) => {
        console.log('Tasks loaded successfully:', tasks);
        this._tasks.set(tasks);
      }),
      catchError((error) => {
        console.error('Error loading tasks:', error);
        return of([]);
      })
    );
  }

  get(id: string) {
    return this.http.get<Task>(`${this.base}/${id}`);
  }

  create(dto: Task) {
    return this.http.post<Task>(this.base, dto).pipe(
      tap((created) => {
        console.log('Task created:', created);
        this._tasks.update((tasks) => [created, ...tasks]);
      })
    );
  }

  update(id: string, dto: Partial<Task>) {
    return this.http.put<Task>(`${this.base}/${id}`, dto).pipe(
      tap((updated) => {
        console.log('Task updated:', updated);
        this._tasks.update((tasks) =>
          tasks.map((t) => (t.id === id ? updated : t))
        );
      })
    );
  }

  remove(id: string) {
    return this.http.delete<void>(`${this.base}/${id}`).pipe(
      tap(() => {
        console.log('Task deleted:', id);
        this._tasks.update((tasks) => tasks.filter((t) => t.id !== id));
      })
    );
  }
}
