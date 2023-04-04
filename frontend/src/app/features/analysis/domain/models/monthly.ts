import { Movement } from '@features/movements/domain/models/movement.model';

export interface AnalysisMonthly {
    expenses: number;
    balance: number;
    amount: number;
    movements: Movement[];
}
