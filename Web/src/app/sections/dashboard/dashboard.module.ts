import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { DashboardRoutingModule } from '@sections/dashboard/dashboard-routing.module';
import { DashboardComponent } from '@sections/dashboard/components/dashboard/dashboard.component';
import { DashboardGlobalPositionCardComponent } from '@sections/dashboard/components/cards/global-position/global-position.component';

@NgModule({
    declarations: [DashboardComponent, DashboardGlobalPositionCardComponent],
    imports: [CommonModule, CoreModule, DashboardRoutingModule],
})

/**
 * Dashboard module
 */
export class DashboardModule {}
