export class SessionUtils {
  static generateSessionId(studentId: string): string {
    const timestamp = new Date().getTime();
    return btoa(`${timestamp}-${studentId}`);
  }
}
