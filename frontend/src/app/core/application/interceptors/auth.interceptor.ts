import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

/**
 * Authentication interceptor
 */
export class AuthInterceptor implements HttpInterceptor {
    constructor(private readonly router: Router) {}

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const clonedRequest = request.clone({
            withCredentials: true,
        });

        return next.handle(clonedRequest).pipe(
            catchError((error: any) => {
                if (error.status !== 401) {
                    // eslint-disable-next-line deprecation/deprecation
                    return throwError(error);
                }
                this.router.navigate(['/auth/login']);
                // eslint-disable-next-line deprecation/deprecation
                return throwError(error);
            })
        );
    }
}
