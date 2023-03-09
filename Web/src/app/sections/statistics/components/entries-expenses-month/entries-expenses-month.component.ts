import { Component, OnInit } from '@angular/core';
import { StatisticsService } from '@core/services/statistics.service';
// import { EntryExpenseMonth } from '@core/models/statistics/entry-expense-month.model';

@Component({
    selector: 'sections-statistics-entries-expenses-month',
    templateUrl: './entries-expenses-month.component.html',
    styleUrls: ['./entries-expenses-month.component.scss'],
})

/**
 * Chart with entries and expenses grouped by month
 */
export class EntriesExpensesMonthComponent implements OnInit {
    /* statistics: EntryExpenseMonth[]; */
    showXAxis!: boolean;
    showYAxis!: boolean;
    showLegend!: boolean;
    showXAxisLabel!: boolean;
    xAxisLabel!: string;
    showYAxisLabel!: boolean;
    yAxisLabel!: string;
    legendTitle!: string;
    colorScheme: any;

    constructor(private statisticsService: StatisticsService) {}

    public ngOnInit(): void {
        // Chart configuration
        this.showXAxis = true;
        this.showYAxis = true;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Months';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Quantity';
        this.legendTitle = 'Movement type';
        this.colorScheme = {
            domain: ['#72d310', '#ff0000'],
        };

        // Get statistics
        /* this.statisticsService.entriesExpensesPerMonth().subscribe((statistics: EntryExpenseMonth[]) => {
            console.log(statistics);
            this.statistics = statistics;
        }); */
    }
}
