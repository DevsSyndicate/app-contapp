import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { EntryExpenseCurrentMonth } from '@core/models/statistics/entry-expense-current-month.model';
import { StatisticsService } from '@core/services/statistics.service';

@Component({
    selector: 'sections-statistics-entries-expenses-current-month',
    templateUrl: './entries-expenses-current-month.component.html',
    styleUrls: ['./entries-expenses-current-month.component.scss'],
})

/**
 * Chart with entries and expenses for current month
 */
export class EntriesExpensesCurrentMonthComponent implements OnInit, AfterViewInit {
    @ViewChild('chartContainer') chartContainer!: ElementRef;

    private currentMonth!: Date;
    public currentMonthName!: string;
    public data!: EntryExpenseCurrentMonth[];
    public colorScheme!: any;
    public gradient!: boolean;
    public totalLabel!: string;
    public size!: number[];
    public showChart!: boolean;

    constructor(private statisticsService: StatisticsService) {}

    public ngOnInit(): void {
        // Get current month
        this.currentMonth = new Date();
        this.currentMonthName = this.currentMonth.toLocaleString('es-ES', { month: 'long' });
    }

    public ngAfterViewInit(): void {
        // Get data
        this.statisticsService.entriesExpensesOfCurrentMonth().subscribe((data: EntryExpenseCurrentMonth[]) => {
            this.data = data;

            // Set chart appearance
            this.setChartAppearance();
        });
    }

    /**
     * Set chart appearance
     */
    private setChartAppearance(): void {
        this.gradient = true;
        this.totalLabel = 'Money movements in this month';
        this.size = [this.chartContainer.nativeElement.offsetWidth, 300];
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28'],
        };

        this.showChart = true;
    }
}
