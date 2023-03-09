import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@core/services/layout.service';

@Component({
    selector: 'core-root',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.scss'],
})

/**
 * Application main component
 */
export class CoreComponent implements OnInit {

    constructor(private layoutService: LayoutService) {}

    public ngOnInit(): void {

        // Add body class depending on route
        this.layoutService.addBodyClass();

    }

}
