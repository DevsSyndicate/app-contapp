import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { MonthlyAnalysisPresentationFacade } from '../../facades/analysis-monthly.facade';

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
    public monthyMovements$: Observable<MovementsPublicModels.MovementPublic[]> = this.monthlyAnalysisFacade.getMovements();

    public movementsCollapsed = false;

    constructor(private readonly monthlyAnalysisFacade: MonthlyAnalysisPresentationFacade) {

    }
}
