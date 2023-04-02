import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AnalysisService } from './application/services/analysis.service';
import { MonthlyAnalysisEffects } from './application/state/analysis-monthly.effects';
import { analysisReducer } from './application/state/analysis.reducers';

@NgModule({
    imports: [
        StoreModule.forFeature('analysis', analysisReducer),
        EffectsModule.forFeature([MonthlyAnalysisEffects]),
    ],
    providers: [
        AnalysisService,
    ],
})

/**
 * Analysis feature module
 */
export class AnalysisFeatureModule {}
