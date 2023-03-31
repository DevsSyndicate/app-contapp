import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MovementsService } from './application/services/movements.service';
import { MovementsEffects } from './application/state/momenents.effects';
import { movementsReducer } from './application/state/momenents.reducers';
import { MovementsTranformer } from './application/transformers/movements.transformer';

import { AccountsFeatureModule } from '@features/accounts/accounts-feature.module';
import { CategoriesFeatureModule } from '@features/categories/categories-feature.module';

@NgModule({
    imports: [
        StoreModule.forFeature('movements', movementsReducer),
        EffectsModule.forFeature([MovementsEffects]),
        AccountsFeatureModule,
        CategoriesFeatureModule,
    ],
    providers: [
        MovementsService,
        MovementsTranformer,
    ],
})

/**
 * Movements feature module
 */
export class MovementsFeatureModule {}
