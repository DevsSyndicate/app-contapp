import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from '@sections/categories/components/categories/categories.component';

/**
 * Categories route definition
 */
const routes: Routes = [
    {
        path: '',
        component: CategoriesComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoriesRoutingModule {}
