import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigationAction } from '@ngrx/router-store';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';

import { MonthlyAnalysisEffectsInterface } from '../../domain/interfaces/analysis-monthly-effects.interface';
import { AnalysisMonthly } from '../../domain/models/monthly';
import { LoadMonthlyAnalysisAccountBalances, LoadMonthlyAnalysisAccountBalancesError, LoadMonthlyAnalysisAccountBalancesSuccess } from '../../domain/state/analysis.actions';

import { MonthlyAnalysisPort } from '@features/analysis/domain/ports/analysis-monthly.port';

@Injectable()

/**
 * Monthly analysis effects
 */
export class MonthlyAnalysisEffects implements MonthlyAnalysisEffectsInterface {
    constructor(
        private readonly actions$: Actions,
        @Inject('MonthlyAnalysisPort') private readonly monthlyAnalysisPort: MonthlyAnalysisPort
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
                this.monthlyAnalysisPort.getMonthlyAccountBalances().pipe(
                    map((monthlyAccountBalances: AnalysisMonthly) =>
                        LoadMonthlyAnalysisAccountBalancesSuccess({ monthlyAccountBalances })),
                    catchError(() => of(LoadMonthlyAnalysisAccountBalancesError()))
                ))
        ));
}
