import { Injectable } from '@angular/core';

import { DatesServiceInterface } from '../../domain/interfaces/dates-service.interface';

@Injectable()

/**
 * Dates service
 */
export class DatesService implements DatesServiceInterface {
    public getCurrentDtae(): string {
        const date = new Date();
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, '0');
        const day = `${date.getDate()}`.padStart(2, '0');

        return `${day}-${month}-${year}`;
    }
}
