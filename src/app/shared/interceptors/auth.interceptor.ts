import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SessionUtils } from "../utils/session.utils";

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const studentId = req.body?.studentId || '';
    const sessionId = SessionUtils.generateSessionId(studentId);

    const clonedReq = req.clone({
      setHeaders: {
        'sessionId': sessionId,
        'Content-Type': 'application/json'
      }
    });

    return next.handle(clonedReq);
  }
}
