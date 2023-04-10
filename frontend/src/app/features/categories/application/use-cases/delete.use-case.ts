import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoriesRepositoryInterface } from '../../domain/interfaces/categories-repository.interface';

import { environment } from '@env/environment';

@Injectable()

/**
 * Create category use case
 */
export class DeleteCategoryUseCase {
    public ApiUrl = `${environment.ApiUrl}/categories`;

    constructor(@Inject('CategoriesRepositoryInterface') private readonly categoriesRepository: CategoriesRepositoryInterface) {

    }

    public delete(id: string): Observable<boolean> {
        return this.categoriesRepository.delete(this.ApiUrl, id);
    }
}
