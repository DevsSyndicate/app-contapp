import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BYPASS_INTERCEPTOR } from '../../domain/constants/configurations.const';
import { ApiServiceInterface } from '../../domain/interfaces/api-service.interface';

@Injectable()

/**
 * Service to interact with Api
 */
export class ApiService implements ApiServiceInterface {
    constructor(private readonly httpClient: HttpClient) {}

    public get<T>(url: string, params?: any, byPassInterceptor: boolean = false): Observable<T> {
        return this.httpClient.get<T>(
            url,
            { params, context: new HttpContext().set(BYPASS_INTERCEPTOR, byPassInterceptor) }
        );
    }

    public post<T>(url: string, body: any, byPassInterceptor: boolean = false): Observable<T> {
        return this.httpClient.post<T>(
            url,
            body,
            { context: new HttpContext().set(BYPASS_INTERCEPTOR, byPassInterceptor) }
        );
    }

    public put(url: string, body: any): Observable<any> {
        return this.httpClient.put(url, body);
    }

    public delete(url: string): Observable<any> {
        return this.httpClient.delete(url);
    }
}
