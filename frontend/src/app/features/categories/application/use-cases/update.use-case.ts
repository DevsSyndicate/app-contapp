import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoriesRepositoryInterface } from '../../domain/interfaces/categories-repository.interface';
import { Category } from '../../domain/models/category.model';

import { environment } from '@env/environment';

@Injectable()

/**
 * Update category use case
 */
export class UpdateCategoryUseCase {
    public ApiUrl = `${environment.ApiUrl}/categories`;

    constructor(@Inject('CategoriesRepositoryInterface') private readonly accountsRepository: CategoriesRepositoryInterface) {

    }

    public update(category: Category, id: string): Observable<Category> {
        return this.accountsRepository.update<Category>(this.ApiUrl, category, id);
    }
}
