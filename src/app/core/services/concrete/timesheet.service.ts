import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { TimesheetServiceContract } from '../contracts/timesheet-service.contract';
import { TimesheetRequest } from '../../models/request/timesheet-request.interface';
import { ScheduleResponse } from '../../models/response/timesheet-response.interface';
import { ApiUrl } from '../../../../environments/api-url';

// Concrete strategy implementation
@Injectable({
  providedIn: 'root'
})
export class TimesheetService implements TimesheetServiceContract {

  constructor(private http: HttpClient) {}

  // get getStudent Schedule classes
  getStudentSchedule(request: TimesheetRequest): Observable<ScheduleResponse> {
    return this.http.post<ScheduleResponse>(
      ApiUrl.GetSchedule,
      { studentId:request.studentId }
    );
  }
}
