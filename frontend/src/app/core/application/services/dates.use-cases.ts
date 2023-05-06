import { Injectable } from '@angular/core';

import { DatesUsesCasesInterface } from '../../domain/interfaces/dates-service.interface';

@Injectable()

/**
 * Dates use cases
 */
export class DatesUseCases implements DatesUsesCasesInterface {
    public getCurrentDtae(): string {
        const date = new Date();
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, '0');
        const day = `${date.getDate()}`.padStart(2, '0');

        return `${day}-${month}-${year}`;
    }

    public getCurrentMonth(): string {
        const months = [
            'enero',
            'febrero',
            'marzo',
            'abril',
            'mayo',
            'junio',
            'julio',
            'agosto',
            'septiembre',
            'octubre',
            'noviembre',
            'diciembre',
        ];

        const now = new Date();
        const currentMonthName = months[now.getMonth()];

        return currentMonthName;
    }
}
