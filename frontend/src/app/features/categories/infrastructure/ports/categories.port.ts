import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CreateCategoryUseCase } from '../../application/use-cases/create.use-case';
import { DeleteCategoryUseCase } from '../../application/use-cases/delete.use-case';
import { GetCategoriesUseCase } from '../../application/use-cases/get.use-case';
import { UpdateCategoryUseCase } from '../../application/use-cases/update.use-case';
import { CategoriesPortInterface } from '../../domain/interfaces/categories-port.interface';
import { Category } from '../../domain/models/category.model';

@Injectable()

/**
 * Categories port to intercat bewteen infrastructrue and application layer
 */
export class CategoriesPort implements CategoriesPortInterface {
    constructor(
        private readonly createCategoryUseCase: CreateCategoryUseCase,
        private readonly updateCategoryUseCase: UpdateCategoryUseCase,
        private readonly deleteCategoryUseCase: DeleteCategoryUseCase,
        private readonly getCategoriesUseCase: GetCategoriesUseCase
    ) {}

    public getList(): Observable<Category[]> {
        return this.getCategoriesUseCase.getList();
    }

    public get(id: string): Observable<Category> {
        return this.getCategoriesUseCase.get(id);
    }

    public create(category: Category): Observable<Category> {
        return this.createCategoryUseCase.create(category);
    }

    public update(category: Category, id: string): Observable<Category> {
        return this.updateCategoryUseCase.update(category, id);
    }

    public delete(id: string): Observable<boolean> {
        return this.deleteCategoryUseCase.delete(id);
    }
}
