import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoriesRepositoryInterface } from '../../domain/interfaces/categories-repository.interface';
import { CATEGORIES_API_URL } from '../constants/api.const';

@Injectable()

/**
 * Create category use case
 */
export class DeleteCategoryUseCase {
    constructor(@Inject('CategoriesRepositoryInterface') private readonly categoriesRepository: CategoriesRepositoryInterface) {

    }

    public delete(id: string): Observable<boolean> {
        return this.categoriesRepository.delete(CATEGORIES_API_URL, id);
    }
}
