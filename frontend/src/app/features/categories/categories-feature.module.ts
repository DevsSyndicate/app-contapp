import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { categoriesReducer } from './application/state/categories.reducers';
import { CreateCategoryUseCase } from './application/use-cases/create.use-case';
import { DeleteCategoryUseCase } from './application/use-cases/delete.use-case';
import { GetCategoriesUseCase } from './application/use-cases/get.use-case';
import { UpdateCategoryUseCase } from './application/use-cases/update.use-case';
import { CategoriesPort } from './infrastructure/ports/categories.port';
import { CategoriesRepository } from './infrastructure/repositories/categories.repository';
import { CategoriesEffects } from './infrastructure/state/categories.effects';

@NgModule({
    imports: [
        StoreModule.forFeature('categories', categoriesReducer),
        EffectsModule.forFeature([CategoriesEffects]),
    ],
    providers: [
        CategoriesPort,
        CreateCategoryUseCase,
        DeleteCategoryUseCase,
        GetCategoriesUseCase,
        UpdateCategoryUseCase,
        { provide: 'CategoriesRepositoryInterface', useClass: CategoriesRepository },
    ],
})

/**
 * Categories feature module
 */
export class CategoriesFeatureModule {}
