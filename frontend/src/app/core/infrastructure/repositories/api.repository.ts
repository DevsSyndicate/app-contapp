import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiRepositoryInterface } from '../../domain/interfaces/api-repository.interface';

@Injectable()

/**
 * Repository to interact with Api
 */
export class ApiRepository implements ApiRepositoryInterface {
    constructor(private readonly httpClient: HttpClient) {}

    public get<T>(url: string, params?: any): Observable<T> {
        return this.httpClient.get<T>(url, { params });
    }

    public post<T>(url: string, body: any): Observable<T> {
        return this.httpClient.post<T>(url, body);
    }

    public put(url: string, body: any) {
        return this.httpClient.put(url, body);
    }

    public delete(url: string): Observable<any> {
        return this.httpClient.delete(url);
    }
}
