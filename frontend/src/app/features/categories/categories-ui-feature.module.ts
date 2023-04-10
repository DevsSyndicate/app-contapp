import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';

import { CategoriesFeatureModule } from './categories-feature.module';
import { CategoriesPresentationAdapter } from './presentation/adapters/categories.adapter';
import { CategoriesFormComponent } from './presentation/components/form/form.component';
import { CategoriesTableComponent } from './presentation/components/table/table.component';

import { ValidationErrorsComponent } from '@shared/components/validation-errors/validation-errors.component';
import { CurrencyPipe } from '@shared/pipes/currency.pipe';

@NgModule({
    declarations: [
        CategoriesFormComponent,
        CategoriesTableComponent,
    ],
    exports: [
        CategoriesFormComponent,
        CategoriesTableComponent,
    ],
    imports: [
        CategoriesFeatureModule,
        ColorPickerModule,
        CommonModule,
        CurrencyPipe,
        ReactiveFormsModule,
        RouterModule,
        ValidationErrorsComponent,
    ],
    providers: [
        CategoriesPresentationAdapter,
    ],
})

/**
 * Categories Ui feature module
 */
export class CategoriesUiFeatureModule {}
