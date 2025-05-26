import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleTableComponent } from './components/schedule-table/schedule-table.component';
import { CurrentClassComponent } from './components/current-class/current-class.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimesheetRoutingModule } from './timesheet-routing.module';
import { TimesheetPageComponent } from './components/pages/pages.component';
import { TimesheetServiceContract } from '../../core/services/contracts/timesheet-service.contract';
import { TimesheetService } from '../../core/services/concrete/timesheet.service';
import { TimesheetFacade } from '../../core/facade/timesheet.facade';

@NgModule({
  declarations: [
    TimesheetPageComponent,
    ScheduleTableComponent,
    CurrentClassComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TimesheetRoutingModule  // Add this
  ],
  providers:[
    {
      provide: TimesheetServiceContract,
      useClass: TimesheetService
    },
    TimesheetFacade,
  ],
})
export class TimesheetModule { }
