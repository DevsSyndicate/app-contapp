import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Select2Module } from 'ng-select2-component';
import { DpDatePickerModule } from 'ng2-date-picker';

import { MovementsFeatureModule } from './movements-feature.module';
import { MovementsAccountsComponent } from './presentation/components/accounts-resume/accounts-resume.component';
import { MovementsFormComponent } from './presentation/components/form/form.component';
import { MovementsTableComponent } from './presentation/components/table/table.component';
import { MovementsPresentationFacade } from './presentation/facades/movements.facade';

import { CurrencyPipe } from '@shared/pipes/currency.pipe';

@NgModule({
    declarations: [
        MovementsAccountsComponent,
        MovementsFormComponent,
        MovementsTableComponent,
    ],
    exports: [
        MovementsAccountsComponent,
        MovementsFormComponent,
        MovementsTableComponent,
    ],
    imports: [
        CommonModule,
        CurrencyPipe,
        DpDatePickerModule,
        MovementsFeatureModule,
        NgbPaginationModule,
        ReactiveFormsModule,
        RouterModule,
        Select2Module,
    ],
    providers: [
        MovementsPresentationFacade,
    ],
})

/**
 * Movements Ui feature module
 */
export class MovementsUiFeatureModule {}
