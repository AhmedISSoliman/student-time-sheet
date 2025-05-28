import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TimesheetFacade } from '../../../../core/facade/timesheet.facade';
import { ScheduleResponse } from '../../../../core/models/response/timesheet-response.interface'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss'
})
export class TimesheetPageComponent {
  timesheetForm: FormGroup;
  timesheetData: ScheduleResponse | null = null;
  isLoading = false;
  error: string | null = null;

  isFormSubmitted: boolean = false;
  constructor(
    private fb: FormBuilder,
    private timesheetFacade: TimesheetFacade,
    private toastr: ToastrService
  ) {
    this.timesheetForm = this.fb.group({
      studentId: ['', [Validators.required, Validators.pattern(/^\d+$/)]]
    });
  }

  ngOnInit(): void { }

  onSubmit(): void {
    this.isFormSubmitted = true;
    if (this.timesheetForm.invalid) {
      this.toastr.warning("Please enter a valid Student ID to proceed.", "Warning")
      return;
    }

    this.isLoading = true;
    this.error = null;
    const studentId = this.timesheetForm.value.studentId;

    this.timesheetFacade.getStudentSchedule(studentId).subscribe({
      next: (data) => {
        this.timesheetData = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = err.message || 'Failed to fetch schedule.';
        this.isLoading = false;
      }
    });
  }

  reset() {
    this.isFormSubmitted = false;
    this.isLoading = false;
    this.error = null;
    this.timesheetData = null;
    this.timesheetForm.reset();
  }

}
