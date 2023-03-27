import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderLayoutComponent } from './components/header/header.component';
import { SidebarLayoutComponent } from './components/sidebar/sidebar.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { MainLayoutComponent } from './layouts/main/main-layout.component';

@NgModule({
    declarations: [
        AuthLayoutComponent,
        HeaderLayoutComponent,
        MainLayoutComponent,
        SidebarLayoutComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        AuthLayoutComponent,
        HeaderLayoutComponent,
        MainLayoutComponent,
        SidebarLayoutComponent,
    ],
})

/**
 * Layout module
 */
export class LayoutModule { }
