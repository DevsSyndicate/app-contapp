import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoriesRepositoryInterface } from '../../domain/interfaces/categories-repository.interface';
import { Category } from '../../domain/models/category.model';
import { CATEGORIES_API_URL } from '../constants/api.const';

@Injectable()

/**
 * Create category use case
 */
export class CreateCategoryUseCase {
    constructor(@Inject('CategoriesRepositoryInterface') private readonly categoriesRepository: CategoriesRepositoryInterface) {

    }

    public create(category: Category): Observable<Category> {
        return this.categoriesRepository.create<Category>(CATEGORIES_API_URL, category);
    }
}
