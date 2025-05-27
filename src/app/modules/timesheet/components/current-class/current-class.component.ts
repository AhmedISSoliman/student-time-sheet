import { Component, Input } from '@angular/core';
import { DateUtils } from '../../../../shared/utils/date.utils';
import { ClassSession } from '../../../../core/models/response/timesheet-response.interface';

@Component({
  selector: 'app-current-class',
  templateUrl: './current-class.component.html',
  styleUrls: ['./current-class.component.scss']
})
export class CurrentClassComponent {
  @Input() set schedule(classes: ClassSession[]) {
    this.currentClass = classes?.find(c => DateUtils.isCurrentClass(c)) || null;
    this.nextClass = classes?.find(c => DateUtils.isNextClass(c)) || null;
  }

  currentClass: ClassSession | null = null;
  nextClass: ClassSession | null = null;
}
