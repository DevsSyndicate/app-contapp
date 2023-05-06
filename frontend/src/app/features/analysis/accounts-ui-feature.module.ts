import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { AnalysisFeatureModule } from './analysis-feature.module';
import { MonthlyAnalysisStateAdapter } from './infrastructure/adapters/analysis-monthly-state.adapter';
import { AnalysisMenuComponent } from './ui/components/menu/menu.component';
import { AnalysisMonthlyComponent } from './ui/components/monthly/monthly.component';
import { AnalysisMonthlyBalancesComponent } from './ui/components/monthly-balances/monthly-balances.component';
import { AnalysisMonthlyForecastsComponent } from './ui/components/monthly-forecasts/monthly-forecasts.component';
import { AnalysisMonthlyMovementsComponent } from './ui/components/monthly-movements/monthly-movements.component';

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
    providers: [
        {
            provide: 'MonthlyAnalysisPort', useClass: MonthlyAnalysisStateAdapter,
        },
    ],
})

/**
 * Analysis Ui feature module
 */
export class AnalysisUiFeatureModule {}
