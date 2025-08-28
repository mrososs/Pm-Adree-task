import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskApiService } from '../../data-access/task-api.service';
import {
  Task,
  TaskCategory,
  TaskStatus,
} from '../../../../../assets/mock-api/mock.db';
import { PrimeNgModule } from '../../../../shared/ui/prime-ng.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private taskApi = inject(TaskApiService);

  taskForm!: FormGroup;
  isEditMode = signal(false);
  taskId = signal<string | null>(null);
  loading = signal(false);

  // Dropdown options
  categories: TaskCategory[] = ['Dev', 'Test', 'UI', 'Db'];
  statuses: TaskStatus[] = ['New', 'Active', 'Closed'];
  users = signal<string[]>([]);

  ngOnInit() {
    this.initializeForm();
    this.loadUsers();

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode.set(true);
      this.taskId.set(id);
      this.loadTask(id);
    }
  }

  private initializeForm() {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      assignedTo: [''],
      dueDate: [null as Date | null],
      estimatedHours: [null as number | null, [Validators.min(0)]],
      category: ['Dev' as TaskCategory, Validators.required],
      status: ['New' as TaskStatus, Validators.required],
    });
  }

  private loadUsers() {
    // In a real app, this would come from a user service
    this.users.set([
      'Mohamed Osama',
      'Radwa Mohamed',
      'Ali Hassan',
      'Sara Ibrahim',
      'Nour Ahmed',
      'Omar Farouk',
    ]);
  }

  private loadTask(id: string) {
    this.loading.set(true);
    this.taskApi.get(id).subscribe({
      next: (task) => {
        this.taskForm.patchValue({
          title: task.title,
          description: task.description || '',
          assignedTo: task.assignedTo || '',
          dueDate: task.dueDate ? new Date(task.dueDate) : null,
          estimatedHours: task.estimatedHours || null,
          category: task.category,
          status: task.status,
        });
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.router.navigate(['/tasks']);
      },
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.loading.set(true);
      const formValue = this.taskForm.value;

      const taskData: Partial<Task> = {
        title: formValue.title,
        description: formValue.description || undefined,
        assignedTo: formValue.assignedTo || undefined,
        dueDate: formValue.dueDate
          ? formValue.dueDate.toISOString().split('T')[0]
          : undefined,
        estimatedHours: formValue.estimatedHours || undefined,
        category: formValue.category,
        status: formValue.status,
      };

      if (this.isEditMode()) {
        this.taskApi.update(this.taskId()!, taskData).subscribe({
          next: () => {
            this.router.navigate(['/tasks']);
          },
          error: () => {
            this.loading.set(false);
          },
        });
      } else {
        this.taskApi.create(taskData as Task).subscribe({
          next: () => {
            this.router.navigate(['/tasks']);
          },
          error: () => {
            this.loading.set(false);
          },
        });
      }
    } else {
      this.markFormGroupTouched();
    }
  }

  onCancel() {
    this.router.navigate(['/tasks']);
  }

  private markFormGroupTouched() {
    Object.keys(this.taskForm.controls).forEach((key) => {
      const control = this.taskForm.get(key);
      control?.markAsTouched();
    });
  }

  getFieldError(fieldName: string): string {
    const field = this.taskForm.get(fieldName);
    if (field?.invalid && field?.touched) {
      if (field.errors?.['required']) {
        return `${fieldName} is required`;
      }
      if (field.errors?.['minlength']) {
        return `${fieldName} must be at least ${field.errors['minlength'].requiredLength} characters`;
      }
      if (field.errors?.['min']) {
        return `${fieldName} must be at least ${field.errors['min'].min}`;
      }
    }
    return '';
  }
}
