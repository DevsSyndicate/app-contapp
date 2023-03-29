import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

/**
 * Xsrf interceptor
 */
export class XsrfInterceptor implements HttpInterceptor {
    public headerName = 'X-XSRF-TOKEN';

    constructor(private readonly tokenExtractor: HttpXsrfTokenExtractor) {}

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.method === 'GET' || request.method === 'HEAD') {
            return next.handle(request);
        }

        const token = this.tokenExtractor.getToken();

        debugger;

        if (token !== null && !request.headers.has(this.headerName)) {
            request = request.clone({ headers: request.headers.set(this.headerName, token) });
        }

        return next.handle(request);
    }
}
