import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'timesheet',
    loadChildren: () => import('./modules/timesheet/timesheet.module').then(m => m.TimesheetModule)
  },
  { path: '', redirectTo: 'timesheet', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
