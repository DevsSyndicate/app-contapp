import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CategoriesService } from './application/services/categories.service';
import { CategoriesEffects } from './application/state/categories.effects';
import { categoriesReducer } from './application/state/categories.reducers';

@NgModule({
    imports: [
        StoreModule.forFeature('categories', categoriesReducer),
        EffectsModule.forFeature([CategoriesEffects]),
    ],
    providers: [
        CategoriesService,
    ],
})

/**
 * Categories feature module
 */
export class CategoriesFeatureModule {}
