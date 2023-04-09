import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderLayoutComponent } from '../components/header/header.component';
import { SidebarLayoutComponent } from '../components/sidebar/sidebar.component';

import { MainLayoutRoutingModule } from './main-layout-routing.module';
import { MainLayoutComponent } from './main-layout.component';

import { UserFeatureModule } from '@features/user/user-feature.module';

@NgModule({
    declarations: [
        HeaderLayoutComponent,
        MainLayoutComponent,
        SidebarLayoutComponent,
    ],
    imports: [
        CommonModule,
        MainLayoutRoutingModule,
        RouterModule,
        UserFeatureModule,
    ],
    exports: [
        HeaderLayoutComponent,
        MainLayoutComponent,
        SidebarLayoutComponent,
    ],
})

/**
 * Main layout module
 */
export class MainLayoutModule { }
