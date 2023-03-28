import { Observable } from 'rxjs';

/**
 * ApiService interface
 */
export interface ApiServiceInterface {
    get: <T>(url: string, params?: any) => Observable<T>;
    post: <T>(url: string, body: any) => Observable<T>;
    put: (url: string, body: any) => Observable<any>;
    delete: (url: string) => Observable<any>;
}
