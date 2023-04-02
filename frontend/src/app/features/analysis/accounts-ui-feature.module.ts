import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnalysisFeatureModule } from './analysis-feature.module';
import { AnalysisMenuComponent } from './presentation/components/menu/menu.component';
import { AnalysisMonthlyComponent } from './presentation/components/monthly/monthly.component';
import { AnalysisMonthlyBalancesComponent } from './presentation/components/monthly-balances/monthly-balances.component';
import { AnalysisMonthlyMovementsComponent } from './presentation/components/monthly-movements/monthly-movements.component';

@NgModule({
    declarations: [
        AnalysisMenuComponent,
        AnalysisMonthlyBalancesComponent,
        AnalysisMonthlyComponent,
        AnalysisMonthlyMovementsComponent,
    ],
    exports: [
        AnalysisMenuComponent,
        AnalysisMonthlyComponent,
    ],
    imports: [
        AnalysisFeatureModule,
        CommonModule,
    ],
})

/**
 * Analysis Ui feature module
 */
export class AnalysisUiFeatureModule {}
