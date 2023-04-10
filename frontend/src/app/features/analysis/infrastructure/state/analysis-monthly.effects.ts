import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigationAction } from '@ngrx/router-store';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';

import { MonthlyAnalysisEffectsInterface } from '../../domain/interfaces/analysis-monthly-effects.interface';
import { AnalysisMonthly } from '../../domain/models/monthly';
import { LoadMonthlyAnalysisAccountBalances, LoadMonthlyAnalysisAccountBalancesError, LoadMonthlyAnalysisAccountBalancesSuccess } from '../../domain/state/analysis.actions';
import { AnalysisMonthlyPort } from '../ports/analysis-monhtly.port';

@Injectable()

/**
 * Monthly analysis effects
 */
export class MonthlyAnalysisEffects implements MonthlyAnalysisEffectsInterface {
    constructor(
        private readonly actions$: Actions,
        private readonly analysisMonthlyPort: AnalysisMonthlyPort
    ) {}

    public loadMonthlyAccountBalancesOnRouteEnter$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ROUTER_NAVIGATED),
            filter((action: RouterNavigationAction) => /\/analysis\/monthly$/.exec(action.payload.routerState.url) !== null),
            map(() => LoadMonthlyAnalysisAccountBalances())
        ));

    public loadMonthlyAccountBalances$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadMonthlyAnalysisAccountBalances),
            switchMap(() =>
                this.analysisMonthlyPort.getMonthlyAccountBalances().pipe(
                    map((monthlyAccountBalances: AnalysisMonthly) =>
                        LoadMonthlyAnalysisAccountBalancesSuccess({ monthlyAccountBalances })),
                    catchError(() => of(LoadMonthlyAnalysisAccountBalancesError()))
                ))
        ));
}
