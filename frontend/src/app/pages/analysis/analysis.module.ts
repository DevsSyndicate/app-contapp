import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnalysisPageRoutingModule } from './analysis-routing.module';
import { AnalysisPageMenuLayoutComponent } from './layouts/menu/menu.component';
import { AnalysisPageMonthlyLayoutComponent } from './layouts/monthly/monthly.component';

import { AnalysisUiFeatureModule } from '@features/analysis/accounts-ui-feature.module';
import { SharedBreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumbs.component';

@NgModule({
    declarations: [
        AnalysisPageMenuLayoutComponent,
        AnalysisPageMonthlyLayoutComponent,
    ],
    imports: [
        AnalysisPageRoutingModule,
        AnalysisUiFeatureModule,
        CommonModule,
        SharedBreadcrumbsComponent,
    ],
})

/**
 * Analysis page module
 */
export class AnalysisPageModule {}
