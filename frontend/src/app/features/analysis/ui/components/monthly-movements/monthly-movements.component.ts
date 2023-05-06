import { Component, Inject } from '@angular/core';
import { Observable } from 'rxjs';

import { MonthlyAnalysisPort } from '../../../domain/ports/analysis-monthly.port';

import { MovementsPublicModels } from '@features/movements/public.api';

@Component({
    selector: 'app-analysis-monthly-movements',
    templateUrl: './monthly-movements.component.html',
    styleUrls: ['./monthly-movements.component.scss'],
})

/**
 * Analysys monthly movements component
 */
export class AnalysisMonthlyMovementsComponent {
    public monthyMovements$: Observable<MovementsPublicModels.MovementPublic[]> = this.monthlyAnalysisPort.getMovements();

    public movementsCollapsed = false;

    constructor(@Inject('MonthlyAnalysisPort') private readonly monthlyAnalysisPort: MonthlyAnalysisPort) {

    }
}
