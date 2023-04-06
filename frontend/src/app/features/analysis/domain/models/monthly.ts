import { Movement } from '@features/movements/domain/models/movement.model';

export interface AnalysisMonthly {
    expenses: number;
    amount: number;
    movements: Movement[];
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
