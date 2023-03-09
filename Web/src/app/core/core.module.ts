import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BadgeTypeComponent } from './components/badge-type/badge-type.component';
import { HeadingService } from './services/heading.service';
import { DashboardService } from './services/dashboard.service';

@NgModule({
    declarations: [BadgeTypeComponent],
    imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
    exports: [BadgeTypeComponent, ReactiveFormsModule, FormsModule, NgbModule],
    providers: [HeadingService, DashboardService],
})

/**
 * Core module
 */
export class CoreModule {}
