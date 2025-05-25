import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '../services/load.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  /**
   * Intercepts HTTP requests to show a loader while the request is in progress
   * and hides it when the request completes.
   * @param loaderService - Service to manage the loader state.
   */
  constructor(private loaderService: LoaderService) {}

  /**
   * Intercepts outgoing HTTP requests and manages loader visibility.
   * @param req - The outgoing HTTP request.
   * @param next - The next handler in the HTTP pipeline.
   * @returns Observable<HttpEvent<any>> - The modified HTTP event stream.
   */
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    // Check if the request includes a `noLoader` property in the body to bypass the loader
    const noLoader = req.body?.noLoader;

    // If `noLoader` is true, skip managing the loader and proceed with the request
    if (noLoader) return next.handle(req);

    // Mark the application as busy (show loader)
    this.loaderService.busy();

    // Handle the request and finalize by marking the loader as idle (hide loader)
    return next.handle(req).pipe(
      finalize(() => {
        this.loaderService.idle(); // Hide loader when the request completes or fails
      }),
    );
  }
}
