import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AnalysisFeatureModule } from './analysis-feature.module';
import { AnalysisMenuComponent } from './presentation/components/menu/menu.component';
import { AnalysisMonthlyComponent } from './presentation/components/monthly/monthly.component';
import { AnalysisMonthlyBalancesComponent } from './presentation/components/monthly-balances/monthly-balances.component';
import { AnalysisMonthlyForecastsComponent } from './presentation/components/monthly-forecasts/monthly-forecasts.component';
import { AnalysisMonthlyMovementsComponent } from './presentation/components/monthly-movements/monthly-movements.component';

import { CurrencyPipe } from '@shared/pipes/currency.pipe';

@NgModule({
    declarations: [
        AnalysisMenuComponent,
        AnalysisMonthlyBalancesComponent,
        AnalysisMonthlyComponent,
        AnalysisMonthlyForecastsComponent,
        AnalysisMonthlyMovementsComponent,
    ],
    exports: [
        AnalysisMenuComponent,
        AnalysisMonthlyComponent,
    ],
    imports: [
        AnalysisFeatureModule,
        CommonModule,
        CurrencyPipe,
        NgbCollapseModule,
    ],
})

/**
 * Analysis Ui feature module
 */
export class AnalysisUiFeatureModule {}
