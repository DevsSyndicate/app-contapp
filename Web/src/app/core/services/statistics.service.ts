import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { EntryExpenseCurrentMonth } from '@core/models/statistics/entry-expense-current-month.model';

@Injectable({
    providedIn: 'root',
})

/**
 * Statistics service
 */
export class StatisticsService {
    private segment: string;

    constructor(private http: HttpClient) {
        this.segment = 'statistics';
    }

    /**
     * Get entries and expenses of current month
     */
    public entriesExpensesOfCurrentMonth(): Observable<EntryExpenseCurrentMonth[]> {
        return this.http.get<EntryExpenseCurrentMonth[]>(environment.apiUrl + this.segment + '/entries-expenses-current-month');
    }
}
