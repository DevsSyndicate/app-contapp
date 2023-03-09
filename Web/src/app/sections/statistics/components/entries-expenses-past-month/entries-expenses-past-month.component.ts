import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sections-statistics-entries-expenses-past-month',
    templateUrl: './entries-expenses-past-month.component.html',
    styleUrls: ['./entries-expenses-past-month.component.scss'],
})

/**
 * Chart with entries and expenses of past month
 */
export class EntriesExpensesPastMonthComponent implements OnInit {
    private pastMonth!: Date;
    public pastMonthName!: string;

    constructor() {}

    public ngOnInit(): void {
        // Get current month
        this.pastMonth = new Date();
        this.pastMonth.setMonth(this.pastMonth.getMonth() - 1);

        this.pastMonthName = this.pastMonth.toLocaleString('es-ES', { month: 'long' });
    }
}
