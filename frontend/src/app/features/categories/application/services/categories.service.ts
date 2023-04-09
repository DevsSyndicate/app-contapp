import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CategoriesServiceInterface } from '../../domain/interfaces/categories-service.interface';
import { Category } from '../../domain/models/category.model';

import { ApiRepository } from '@core/infrastructure/repositories/api.repository';
import { environment } from '@env/environment';

@Injectable()

/**
 * Categories service
 */
export class CategoriesService implements CategoriesServiceInterface {
    public ApiUrl = `${environment.ApiUrl}/categories`;

    constructor(protected apiService: ApiRepository) {}

    public getList(): Observable<Category[]> {
        return this.apiService.get<Category[]>(this.ApiUrl);
    }

    public get(id: string): Observable<Category> {
        return this.apiService.get<Category>(`${this.ApiUrl}/${id}`);
    }

    public add(resource: Category): Observable<Category> {
        return this.apiService.post<Category>(this.ApiUrl, resource);
    }

    public update(resource: Category, id: string) {
        return this.apiService.put(`${this.ApiUrl}/${id}`, resource);
    }

    public delete(id: string) {
        return this.apiService.delete(`${this.ApiUrl}/${id}`);
    }

    public getListSelect(): Observable<Array<{ id: string; text: string }>> {
        return this.apiService
            .get<Category[]>(`${this.ApiUrl}/select`)
            .pipe(map((response: Category[]) => response.map((element) => ({ id: element.id, text: element.name }))));
    }
}
