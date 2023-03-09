import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { Category, Categories } from '@core/models/category.model';

@Injectable({
    providedIn: 'root',
})

/**
 * Categories service
 */
export class CategoriesService {
    private segment: string;

    constructor(private http: HttpClient, private formBuilder: FormBuilder) {
        this.segment = 'categories';
    }

    /**
     * Get categories
     */
    public index(): Observable<Categories> {
        const params = new HttpParams().set('perPage', '50');

        return this.http.get<Categories>(environment.apiUrl + this.segment, { params });
    }

    /**
     * Get one category
     */
    public show(id: number): Observable<Category> {
        return this.http.get<Category>(environment.apiUrl + this.segment + '/' + id).pipe(map((category: any) => category.item));
    }

    /**
     * Store new category to the API
     */
    public store(data: Category): Observable<Category> {
        return this.http.post<Category>(environment.apiUrl + this.segment, data).pipe(map((category: any) => category.item));
    }

    /**
     * Update category in the API
     */
    public update(id: number, data: Category): Observable<Category> {
        return this.http.post<Category>(environment.apiUrl + this.segment + '/' + id, data).pipe(map((category: any) => category.item));
    }

    /**
     * Delete category in the API
     */
    public delete(id: number): Observable<boolean> {
        return this.http.delete<boolean>(environment.apiUrl + this.segment + '/' + id);
    }

    /**
     * Get categories
     */
    public getCategoriesForSelects(type: string): Observable<Category[]> {
        const params = new HttpParams().set('type', type);

        return this.http.get<Category[]>(environment.apiUrl + this.segment + '/select', { params });
    }

    /**
     * Construct the form
     */
    public createForm(): FormGroup {
        return this.formBuilder.group({
            name: ['', Validators.required],
            type: ['', Validators.required],
        });
    }
}
