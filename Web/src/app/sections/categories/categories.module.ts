import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '@core/core.module';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesTableComponent } from './components/table/table.component';
import { CategoriesFormComponent } from './components/form/form.component';

@NgModule({
    declarations: [CategoriesComponent, CategoriesTableComponent, CategoriesFormComponent],
    imports: [CommonModule, CoreModule, CategoriesRoutingModule],
})

/**
 * Categories module
 */
export class CategoriesModule {}
