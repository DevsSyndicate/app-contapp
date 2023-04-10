import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { analysisReducer } from './application/state/analysis.reducers';
import { GetAccountBalancesUseCase } from './application/use-cases/get-account-balances.use-case';
import { AnalysisMonthlyPort } from './infrastructure/ports/analysis-monhtly.port';
import { AnalysisMonthlyRepository } from './infrastructure/repositories/analysis-monthly.repository';
import { MonthlyAnalysisEffects } from './infrastructure/state/analysis-monthly.effects';

@NgModule({
    imports: [
        StoreModule.forFeature('analysis', analysisReducer),
        EffectsModule.forFeature([MonthlyAnalysisEffects]),
    ],
    providers: [
        AnalysisMonthlyPort,
        GetAccountBalancesUseCase,
        // eslint-disable-next-line no-secrets/no-secrets
        { provide: 'AnalysisMonthlyRepositoryInterface', useClass: AnalysisMonthlyRepository },
    ],
})

/**
 * Analysis feature module
 */
export class AnalysisFeatureModule {}
