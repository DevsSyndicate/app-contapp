import { MovementsPublicModels } from '@features/movements/public.api';

export interface AnalysisMonthly {
    expenses: number;
    amount: number;
    movements: MovementsPublicModels.MovementPublic[];
    forecast: number;
    expensePercent: number;
    forecastExpenses: AnalysisMonthlyForecastCategory[];
}

export interface AnalysisMonthlyForecastCategory {
    name: string;
    forecast: number;
    spent: number;
    color: string;
    icon: string;
    remaining: number;
}
