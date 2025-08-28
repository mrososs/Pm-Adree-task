import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { Task } from '../../../../assets/mock-api/mock.db';
import { tap } from 'rxjs';

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
    return this.http
      .get<Task[]>(this.base)
      .pipe(tap((tasks) => this._tasks.set(tasks)));
  }
  get(id: string) {
    return this.http.get<Task>(`${this.base}/${id}`);
  }
  create(dto: Task) {
    return this.http
      .post<Task>(this.base, dto)
      .pipe(
        tap((created) => this._tasks.update((tasks) => [created, ...tasks]))
      );
  }
  update(id: string, dto: Partial<Task>) {
    return this.http
      .put<Task>(`${this.base}/${id}`, dto)
      .pipe(
        tap((update) =>
          this._tasks.update((tasks) =>
            tasks.map((t) => (t.id === id ? update : t))
          )
        )
      );
  }
  remove(id: string) {
    return this.http
      .delete<void>(`${this.base}/${id}`)
      .pipe(
        tap(() =>
          this._tasks.update((tasks) => tasks.filter((t) => t.id !== id))
        )
      );
  }
}
