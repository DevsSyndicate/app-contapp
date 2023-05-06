import { Component } from '@angular/core';

import { DatesUseCases } from '@core/application/services/dates.use-cases';

@Component({
    selector: 'app-analysis-monthly',
    templateUrl: './monthly.component.html',
})

/**
 * Analysys monthly component
 */
export class AnalysisMonthlyComponent {
    public currentMonth: string = this.datesUseCases.getCurrentMonth();

    constructor(private readonly datesUseCases: DatesUseCases) {}
}
