import { Component, Input } from '@angular/core';
import { ClassSession } from '../../../../core/models/response/timesheet-response.interface';
import { DateUtils } from '../../../../shared/utils/date.utils';
// import { ClassSchedule } from '../../../core/models/response/timesheet-response.interface';
// import { DateUtils } from '../../../shared/utils/date.utils';

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.scss']
})
export class ScheduleTableComponent {
  @Input() schedule: ClassSession[] = [];

  getClassRowClass(classItem: ClassSession): string {
    if (DateUtils.isCurrentClass(classItem)) {
      return 'current-class';
    } else if (DateUtils.isNextClass(classItem)) {
      return 'next-class';
    }
    return '';
  }

  trackByClass(index: number, item: ClassSession): string {
  return `${item.courseCode}-${item.startTime}`;
}
}
