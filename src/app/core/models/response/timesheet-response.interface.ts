export interface ScheduleResponse {
  studentId: string;
  studentName: string;
  schedule: ClassSession[];
  lastUpdated?: string;
}

export interface ClassSession {
  courseCode: string;
  className: string;
  startTime: string;
  endTime: string;
  room: string;
}
