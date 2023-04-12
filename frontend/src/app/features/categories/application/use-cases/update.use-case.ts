import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoriesRepositoryInterface } from '../../domain/interfaces/categories-repository.interface';
import { Category } from '../../domain/models/category.model';
import { CATEGORIES_API_URL } from '../constants/api.const';

@Injectable()

/**
 * Update category use case
 */
export class UpdateCategoryUseCase {
    constructor(@Inject('CategoriesRepositoryInterface') private readonly accountsRepository: CategoriesRepositoryInterface) {

    }

    public update(category: Category, id: string): Observable<Category> {
        return this.accountsRepository.update<Category>(CATEGORIES_API_URL, category, id);
    }
}
