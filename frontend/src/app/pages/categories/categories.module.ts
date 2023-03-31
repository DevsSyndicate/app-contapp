import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CategoriesPageRoutingModule } from './categories-routing.module';
import { CategoriesPageFormLayoutComponent } from './layouts/form/form.component';
import { CategoriesPageListLayoutComponent } from './layouts/list/list.component';

import { CategoriesUiFeatureModule } from '@features/categories/categories-ui-feature.module';
import { SharedBreadcrumbsComponent } from '@shared/components/breadcrumbs/breadcrumbs.component';

@NgModule({
    declarations: [
        CategoriesPageFormLayoutComponent,
        CategoriesPageListLayoutComponent,
    ],
    imports: [
        CategoriesPageRoutingModule,
        CategoriesUiFeatureModule,
        CommonModule,
        SharedBreadcrumbsComponent,
    ],
})

/**
 * Categories page module
 */
export class CategoriesPageModule {}
