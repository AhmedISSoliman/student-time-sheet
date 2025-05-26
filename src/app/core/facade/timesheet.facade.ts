import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TimesheetServiceContract } from '../services/contracts/timesheet-service.contract';
import { TimesheetRequest } from '../models/request/timesheet-request.interface';
import { ScheduleResponse } from '../models/response/timesheet-response.interface';

@Injectable({
  providedIn: 'root'
})
export class TimesheetFacade {
  constructor(private timesheetService: TimesheetServiceContract) {}

  getStudentSchedule(studentId: string): Observable<ScheduleResponse> {
    const request: TimesheetRequest = { studentId };
    return this.timesheetService.getStudentSchedule(request);
  }
}
