export class DateUtils {
  static isCurrentClass(classTime: { startTime: string; endTime: string }): boolean {
    const now = new Date();
    const classStart = new Date(classTime.startTime);
    const classEnd = new Date(classTime.endTime);
    return now >= classStart && now <= classEnd;
  }

  static isNextClass(classTime: { startTime: string }, currentDate: Date = new Date()): boolean {
    const classStart = new Date(classTime.startTime);
    return classStart > currentDate && classStart.getTime() - currentDate.getTime() <= 3600000;
  }
}
