import { createReducer } from '@ngrx/store';

import { analysisInitialState } from '../../domain/state/analysis.state';

export const analysisReducer = createReducer(
    analysisInitialState,

);
