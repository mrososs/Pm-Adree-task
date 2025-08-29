import { MessageService } from 'primeng/api';
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import { TaskApiService } from '../../data-access/task-api.service';
import { TestBed } from '@angular/core/testing';
import { TaskFormComponent } from './task-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimeNgModule } from '../../../../shared/ui/prime-ng.module';
import { of, throwError } from 'rxjs';

const mockTask = {
  id: 'T-1004',
  title: 'Task edit page',
  description: 'Load by id, patch form, save & navigate back.',
  assignedTo: 'Omar Farouk',
  dueDate: '2025-09-08',
  estimatedHours: 5,
  category: 'UI',
  status: 'New',
};

describe('TaskFormComponent', () => {
  let component: TaskFormComponent;
  let fixture: any;
  let api: jest.Mocked<TaskApiService>;
  let router: Router;
  let messageService: MessageService;

  beforeEach(async () => {
    api = {
      load: jest.fn(),
      get: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      remove: jest.fn(),
      tasks: undefined as any,
      stats: undefined as any,
    } as unknown as jest.Mocked<TaskApiService>;
    const messageServiceMock = { add: jest.fn() };

    await TestBed.configureTestingModule({
      imports: [TaskFormComponent, PrimeNgModule, ReactiveFormsModule],
      providers: [
        { provide: TaskApiService, useValue: api },
        { provide: MessageService, useValue: messageServiceMock },
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: jest.fn().mockReturnValue(null),
              },
            },
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(TaskFormComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    messageService = TestBed.inject(MessageService);
    jest.spyOn(router, 'navigate').mockResolvedValue(true as any);
    messageService = (component as any).messageService as MessageService;
    jest.spyOn(messageService, 'add').mockImplementation(() => {});
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with default values', () => {
    fixture.detectChanges();
    expect(component.taskForm).toBeDefined();
    expect(component.taskForm.get('title')?.value).toBe('');
    expect(component.taskForm.get('category')?.value).toBe('Dev');
    expect(component.taskForm.get('status')?.value).toBe('New');
  });

  it('should validate required fields', () => {
    fixture.detectChanges();

    const titleControl = component.taskForm.get('title');
    const categoryControl = component.taskForm.get('category');
    const statusControl = component.taskForm.get('status');

    expect(titleControl?.errors?.['required']).toBeTruthy();
    expect(categoryControl?.errors).toBeFalsy();
    expect(statusControl?.errors).toBeFalsy();
  });

  it('should get field error messages', () => {
    fixture.detectChanges();

    const titleControl = component.taskForm.get('title');
    titleControl?.markAsTouched();

    const error = component.getFieldError('title');
    expect(error).toBe('title is required');
  });

  it('should validate minimum length for title', () => {
    fixture.detectChanges();

    // Arrange
    component.taskForm.patchValue({
      title: 'ab', // Less than 3 characters
      category: 'Dev',
      status: 'New',
    });
    component.taskForm.get('title')?.markAsTouched();

    // Act
    const error = component.getFieldError('title');

    // Assert
    expect(error).toBe('title must be at least 3 characters');
  });

  it('should validate minimum value for estimated hours', () => {
    fixture.detectChanges();

    // Arrange
    component.taskForm.patchValue({
      title: 'Valid Title',
      estimatedHours: -1, // Less than 0
      category: 'Dev',
      status: 'New',
    });
    component.taskForm.get('estimatedHours')?.markAsTouched();

    // Act
    const error = component.getFieldError('estimatedHours');

    // Assert
    expect(error).toBe('estimatedHours must be at least 0');
  });

  it('should navigate back on cancel', () => {
    // Act
    component.onCancel();

    // Assert
    expect(router.navigate).toHaveBeenCalledWith(['/tasks']);
  });

  it('Create | should omit optional fields (undefined) when left empty', () => {
    fixture.detectChanges();
    component.taskForm.patchValue({
      title: 'Only title',
      description: '',
      assignedTo: '',
      dueDate: null,
      estimatedHours: null,
      category: 'Dev',
      status: 'New',
    });
    const apiResponse = { id: 'T-2000', title: 'Only title' } as any;
    (api.create as jest.Mock).mockReturnValue(of(apiResponse));
    component.onSubmit();
    //Assert
    const payload = (api.create as jest.Mock).mock.calls[0][0];
    expect(payload).toEqual({
      title: 'Only title',
      description: undefined,
      assignedTo: undefined,
      dueDate: undefined,
      estimatedHours: undefined,
      category: 'Dev',
      status: 'New',
    });
    expect(router.navigate).toHaveBeenCalledWith(['/tasks']);
  });
  it('Create | should format dueDate to YYYY-MM-DD before sending', () => {
    fixture.detectChanges();
    const date = new Date('2025-12-31T15:45:00Z');
    component.taskForm.patchValue({
      title: 'Has Date',
      dueDate: date,
      category: 'Dev',
      status: 'New',
    });
    (api.create as jest.Mock).mockReturnValue(of({ id: 'T-2001' } as any));

    component.onSubmit();

    const payload = (api.create as jest.Mock).mock.calls[0][0] as any;
    expect(payload.dueDate).toBe('2025-12-31');
  });
  it('Create | should show error toast and stop loading on API error', () => {
    fixture.detectChanges();
    component.taskForm.patchValue({
      title: 'Will Fail',
      category: 'Dev',
      status: 'New',
    });

    (api.create as jest.Mock).mockReturnValue(
      throwError(() => new Error('Boom'))
    );

    component.onSubmit();

    expect(api.create).toHaveBeenCalled();

    expect(component.loading()).toBe(false);

    expect(messageService.add).toHaveBeenCalledWith({
      severity: 'error',
      summary: 'Error',
      detail: 'Failed to create task',
    });

    expect(router.navigate).not.toHaveBeenCalled();
  });
});
