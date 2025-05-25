import { environment } from './environment';

/** class used to hold all API Urls */
export class ApiUrl {
  // Get Schedule classes for students
  public static GetSchedule = environment.apiBaseUrl +"api/student/schedule"
}
