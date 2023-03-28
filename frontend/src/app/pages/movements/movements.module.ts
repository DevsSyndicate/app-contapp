import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MovementsPageFormLayoutComponent } from './layouts/form/form.component';
import { MovementsPageListLayoutComponent } from './layouts/list/list.component';
import { MovementsPageRoutingModule } from './movements-routing.module';

@NgModule({
    declarations: [
        MovementsPageFormLayoutComponent,
        MovementsPageListLayoutComponent,
    ],
    imports: [
        CommonModule,
        MovementsPageRoutingModule,
    ],
})

/**
 * Movements page module
 */
export class MovementsPageModule {}
