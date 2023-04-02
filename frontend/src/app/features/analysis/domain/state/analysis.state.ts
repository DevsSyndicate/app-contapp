import { AnalysisMonthly } from '../models/monthly';

export interface AnalysisState {
    loaded: boolean;
    loading: boolean;
    values: {
        monthly: AnalysisMonthly;
    };
}

export const analysisInitialState: AnalysisState = {
    loaded: false,
    loading: false,
    values: {
        monthly: null,
    },

};
