import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})

/**
 * Service with some util funcionalities
 */
export class UtilsService {
    constructor() {}

    /**
     * Generate an array of months
     */
    public getMonthsArray(): Array<string> {
        const months = Array.from({ length: 12 }, (e, i) => {
            return new Date(1, i + 1, 1).toLocaleDateString('en', { month: 'long' });
        });

        return months;
    }
}
