import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let message = 'An unexpected error occurred';
        if (error.status === 404) {
          message = 'No data found for the Student ID you entered.';
        } else if (error.error?.message) {
          message = error.error.message;
        }
        return throwError(() => new Error(message));
      })
    );
  }
}
