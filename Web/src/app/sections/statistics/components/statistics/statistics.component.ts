import { Component, OnInit } from '@angular/core';
import { HeadingService } from '@core/services/heading.service';

@Component({
    selector: 'sections-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.scss'],
})

/**
 * Statistics main component
 */
export class StatisticsComponent implements OnInit {

    constructor(private headingService: HeadingService) {}

    public ngOnInit(): void {

        // Set page heading
        this.headingService.setHeading('Statistics');

    }

}
