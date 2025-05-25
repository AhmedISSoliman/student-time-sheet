export interface ScheduleResponse {
  studentId: string;
  studentName: string;
  schedule: ClassSession[];
  lastUpdated?: string; // Add fields from your actual API response
}

export interface ClassSession {
  courseCode: string;
  className: string;
  date: string;
  startTime: string;
  endTime: string;
  room: string;
}
