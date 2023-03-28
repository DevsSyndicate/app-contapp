import { createReducer } from '@ngrx/store';

import { coreInitialState } from '../../domain/state/core.state';

export const coreReducer = createReducer(coreInitialState);
