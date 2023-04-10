import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoriesRepositoryInterface } from '../../domain/interfaces/categories-repository.interface';
import { Category } from '../../domain/models/category.model';

import { environment } from '@env/environment';

@Injectable()

/**
 * Create category use case
 */
export class GetCategoriesUseCase {
    public ApiUrl = `${environment.ApiUrl}/categories`;

    constructor(@Inject('CategoriesRepositoryInterface') private readonly categoriesRepository: CategoriesRepositoryInterface) {

    }

    public getList(): Observable<Category[]> {
        return this.categoriesRepository.getList(this.ApiUrl);
    }

    public get(id: string): Observable<Category> {
        return this.categoriesRepository.get(this.ApiUrl, id);
    }
}
