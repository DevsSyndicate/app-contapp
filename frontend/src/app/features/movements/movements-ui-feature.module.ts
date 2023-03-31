import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Select2Module } from 'ng-select2-component';
import { DpDatePickerModule } from 'ng2-date-picker';

import { MovementsFeatureModule } from './movements-feature.module';
import { MovementsFormComponent } from './presentation/components/form/form.component';
import { MovementsTableComponent } from './presentation/components/table/table.component';

@NgModule({
    declarations: [
        MovementsFormComponent,
        MovementsTableComponent,
    ],
    exports: [
        MovementsFormComponent,
        MovementsTableComponent,
    ],
    imports: [
        CommonModule,
        DpDatePickerModule,
        MovementsFeatureModule,
        NgbPaginationModule,
        ReactiveFormsModule,
        RouterModule,
        Select2Module,
    ],
})

/**
 * Movements Ui feature module
 */
export class MovementsUiFeatureModule {}
