import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GetAccountBalancesUseCase } from './application/use-cases/get-account-balances.use-case';
import { AnalysisMonthlyRepository } from './infrastructure/repositories/analysis-monthly.repository';
import { MonthlyAnalysisEffects } from './infrastructure/state/analysis-monthly.effects';
import { analysisReducer } from './infrastructure/state/analysis.reducers';

@NgModule({
    imports: [
        StoreModule.forFeature('analysis', analysisReducer),
        EffectsModule.forFeature([MonthlyAnalysisEffects]),
    ],
    providers: [
        GetAccountBalancesUseCase,
        // eslint-disable-next-line no-secrets/no-secrets
        { provide: 'AnalysisMonthlyRepositoryInterface', useClass: AnalysisMonthlyRepository },
    ],
})

/**
 * Analysis feature module
 */
export class AnalysisFeatureModule {}
