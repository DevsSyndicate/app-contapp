import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoriesRepositoryInterface } from '../../domain/interfaces/categories-repository.interface';
import { Category } from '../../domain/models/category.model';
import { CATEGORIES_API_URL } from '../constants/api.const';

@Injectable()

/**
 * Create category use case
 */
export class GetCategoriesUseCase {
    constructor(@Inject('CategoriesRepositoryInterface') private readonly categoriesRepository: CategoriesRepositoryInterface) {

    }

    public getList(): Observable<Category[]> {
        return this.categoriesRepository.getList(CATEGORIES_API_URL);
    }

    public get(id: string): Observable<Category> {
        return this.categoriesRepository.get(CATEGORIES_API_URL, id);
    }
}
