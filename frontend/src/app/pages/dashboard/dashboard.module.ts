import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardMainLayoutComponent } from './layouts/main/main-layout.component';

import { SharedBreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumbs.component';

@NgModule({
    declarations: [
        DashboardMainLayoutComponent,
    ],
    imports: [
        CommonModule,
        DashboardPageRoutingModule,
        SharedBreadcrumbsComponent,
    ],
    exports: [

    ],
})

/**
 * Dashboard page module
 */
export class DashboardModule { }
