import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelect2Module } from 'ng-select2';
import { CoreModule } from '@core/core.module';
import { MovementsRoutingModule } from './movements-routing.module';
import { MovementsComponent } from './components/movements/movements.component';
import { MovementsFormComponent } from './components/form/form.component';
import { MovementsTableComponent } from './components/table/table.component';
import { MovementsFiltersComponent } from './components/filters/filters.component';

@NgModule({
    declarations: [MovementsComponent, MovementsFormComponent, MovementsTableComponent, MovementsFiltersComponent],
    imports: [CommonModule, NgSelect2Module, CoreModule, MovementsRoutingModule],
})

/**
 * Movements module
 */
export class MovementsModule {}
