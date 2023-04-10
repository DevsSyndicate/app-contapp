import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoriesRepositoryInterface } from '../../domain/interfaces/categories-repository.interface';
import { Category } from '../../domain/models/category.model';

import { ApiRepository } from '@core/infrastructure/repositories/api.repository';

@Injectable()

/**
 * Repository to interact with Categories
 */
export class CategoriesRepository implements CategoriesRepositoryInterface {
    constructor(private readonly apiRepository: ApiRepository) {}

    public getList(url: string): Observable<Category[]> {
        return this.apiRepository.get<Category[]>(url);
    }

    public get(url: string, id: string): Observable<Category> {
        return this.apiRepository.get<Category>(`${url}/${id}`);
    }

    public create<Category>(url: string, category: Category): Observable<Category> {
        return this.apiRepository.post<Category>(url, category);
    }

    public update<Category>(url: string, category: Category, id: string): any {
        return this.apiRepository.put(`${url}/${id}`, category);
    }

    public delete(url: string, id: string): Observable<boolean> {
        return this.apiRepository.delete(`${url}/${id}`);
    }
}
