import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoriesRepositoryInterface } from '../../domain/interfaces/categories-repository.interface';
import { Category } from '../../domain/models/category.model';

import { environment } from '@env/environment';

@Injectable()

/**
 * Create category use case
 */
export class CreateCategoryUseCase {
    public ApiUrl = `${environment.ApiUrl}/categories`;

    constructor(@Inject('CategoriesRepositoryInterface') private readonly categoriesRepository: CategoriesRepositoryInterface) {

    }

    public create(category: Category): Observable<Category> {
        return this.categoriesRepository.create<Category>(this.ApiUrl, category);
    }
}
