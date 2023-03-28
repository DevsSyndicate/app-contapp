import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoriesPageRoutingModule } from './categories-routing.module';
import { CategoriesPageFormLayoutComponent } from './layouts/form/form.component';
import { CategoriesPageListLayoutComponent } from './layouts/list/list.component';

@NgModule({
    declarations: [
        CategoriesPageFormLayoutComponent,
        CategoriesPageListLayoutComponent,
    ],
    imports: [
        CategoriesPageRoutingModule,
        CommonModule,
    ],
})

/**
 * Categories page module
 */
export class CategoriesPageModule {}
