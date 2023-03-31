import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MovementsPageFormLayoutComponent } from './layouts/form/form.component';
import { MovementsPageListLayoutComponent } from './layouts/list/list.component';
import { MovementsPageRoutingModule } from './movements-routing.module';

import { MovementsUiFeatureModule } from '@features/movements/movements-ui-feature.module';
import { SharedBreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumbs.component';

@NgModule({
    declarations: [
        MovementsPageFormLayoutComponent,
        MovementsPageListLayoutComponent,
    ],
    imports: [
        CommonModule,
        MovementsPageRoutingModule,
        MovementsUiFeatureModule,
        SharedBreadcrumbsComponent,
    ],
})

/**
 * Movements page module
 */
export class MovementsPageModule {}
