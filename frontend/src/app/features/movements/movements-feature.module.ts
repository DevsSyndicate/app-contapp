import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { movementsReducer } from './application/state/momenents.reducers';
import { MovementsTranformer } from './application/transformers/movements.transformer';
import { CreateMovementsUseCase } from './application/use-cases/create.use-case';
import { DeleteMovementsUseCase } from './application/use-cases/delete.use-case';
import { GetMovementsUseCase } from './application/use-cases/get.use-case';
import { UpdateMovementsUseCase } from './application/use-cases/update.use-case';
import { MovementsAdapter } from './infrastructure/adapters/movements.adapter';
import { MovementsRepository } from './infrastructure/repositories/movements.repository';
import { MovementsEffects } from './infrastructure/state/momenents.effects';

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
        CreateMovementsUseCase,
        DeleteMovementsUseCase,
        GetMovementsUseCase,
        MovementsAdapter,
        MovementsTranformer,
        UpdateMovementsUseCase,
        { provide: 'MovementsRepositoryInterface', useClass: MovementsRepository },
    ],
})

/**
 * Movements feature module
 */
export class MovementsFeatureModule {}
