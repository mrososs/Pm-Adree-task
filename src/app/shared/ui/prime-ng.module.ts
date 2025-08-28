import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PrimeNG Components
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextarea } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { TooltipModule } from 'primeng/tooltip';

// PrimeNG Services
import { ConfirmationService, MessageService } from 'primeng/api';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    InputTextarea,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    ToastModule,
    CardModule,
    ChartModule,
    ConfirmDialogModule,
    DialogModule,
    TooltipModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    InputTextarea,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    ToastModule,
    CardModule,
    ChartModule,
    ConfirmDialogModule,
    DialogModule,
    TooltipModule,
  ],
  providers: [ConfirmationService, MessageService],
})
export class PrimeNgModule {}
