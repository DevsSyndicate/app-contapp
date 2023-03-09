import { Component, OnInit } from '@angular/core';
import { HeadingService } from '@core/services/heading.service';

@Component({
    selector: 'sections-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})

/**
 * Dashboard main component
 */
export class DashboardComponent implements OnInit {
    constructor(private headingService: HeadingService) {}

    public ngOnInit(): void {
        // Set page heading
        // this.headingService.setHeading('Dashboard');
    }
}
