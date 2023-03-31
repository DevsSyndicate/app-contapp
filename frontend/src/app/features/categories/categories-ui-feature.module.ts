import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ColorPickerModule } from 'ngx-color-picker';

import { CategoriesFeatureModule } from './categories-feature.module';
import { CategoriesFormComponent } from './presentation/components/form/form.component';
import { CategoriesTableComponent } from './presentation/components/table/table.component';

import { ValidationErrorsComponent } from '@shared/components/validation-errors/validation-errors.component';

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
        ReactiveFormsModule,
        RouterModule,
        ValidationErrorsComponent,
    ],
})

/**
 * Categories Ui feature module
 */
export class CategoriesUiFeatureModule {}
