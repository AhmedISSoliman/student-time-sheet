import { Observable } from 'rxjs';
import { TimesheetRequest } from '../../models/request/timesheet-request.interface';
import { ScheduleResponse } from '../../models/response/timesheet-response.interface';

// Abstract strategy interface
export abstract class TimesheetServiceContract {
  abstract getStudentSchedule(request: TimesheetRequest): Observable<ScheduleResponse>;
}
