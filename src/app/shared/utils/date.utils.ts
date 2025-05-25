export class DateUtils {
  static isCurrentClass(classTime: { date: string; startTime: string; endTime: string }): boolean {
    const now = new Date();
    const classDate = new Date(`${classTime.date}T${classTime.startTime}`);
    const classEndDate = new Date(`${classTime.date}T${classTime.endTime}`);
    return now >= classDate && now <= classEndDate;
  }

  static isNextClass(classTime: { date: string; startTime: string }, currentDate: Date = new Date()): boolean {
    const classDate = new Date(`${classTime.date}T${classTime.startTime}`);
    return classDate > currentDate &&
           classDate.getTime() - currentDate.getTime() <= 3600000; // within next hour
  }
}
