import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { TimesheetServiceContract } from '../contracts/timesheet-service.contract';
import { TimesheetRequest } from '../../models/request/timesheet-request.interface';
import { ScheduleResponse } from '../../models/response/timesheet-response.interface';
import {map } from 'rxjs/operators';
import { ApiUrl } from '../../../../environments/api-url';

// Concrete strategy implementation
@Injectable({
  providedIn: 'root'
})
export class TimesheetService implements TimesheetServiceContract {

  constructor(private http: HttpClient) {}

  // get getStudent Schedule classes
  getStudentSchedule(request: TimesheetRequest): Observable<ScheduleResponse> {
    const sessionId = this.generateSessionId(request.studentId);
   const headers = new HttpHeaders({
      'sessionId': sessionId,
    });

    return this.http.post<ScheduleResponse>(
      ApiUrl.GetSchedule,
      { studentId:request.studentId },
      { headers }
    ).pipe(
      map(resp => {
        if (!resp || resp.studentId !== request.studentId)
          throw Error('Not found data for the Student Id you entered');
        return resp;
      })
    );
  }

  // Generate session Id
  private generateSessionId(studentId: string): string {
    const timestamp = new Date().getTime();
    return btoa(`${timestamp}|${studentId}`);
  }

}
