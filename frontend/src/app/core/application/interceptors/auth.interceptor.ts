import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TokenService } from '../services/token.service';

@Injectable()

/**
 * Authentication interceptor
 */
export class AuthInterceptor implements HttpInterceptor {
    constructor(
        private readonly router: Router,
        private readonly tokenService: TokenService
    ) {}

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const accessToken = this.tokenService.getToken();

        const clonedRequest = request.clone({
            setHeaders: {
                Authorization: `Bearer ${accessToken}`,
            },
        });

        return next.handle(clonedRequest).pipe(

            catchError((error: any) => {
                if (error.status !== 401) {
                    return throwError(() => new Error(error));
                }
                this.router.navigate(['/auth/login']);

                return throwError(() => new Error(error));
            })
        );
    }
}
