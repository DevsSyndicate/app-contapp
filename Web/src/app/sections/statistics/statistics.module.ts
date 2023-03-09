import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StatisticsRoutingModule } from './statistics-routing.module';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { EntriesExpensesMonthComponent } from './components/entries-expenses-month/entries-expenses-month.component';
import { EntriesExpensesCurrentMonthComponent } from './components/entries-expenses-current-month/entries-expenses-current-month.component';
import { EntriesExpensesPastMonthComponent } from './components/entries-expenses-past-month/entries-expenses-past-month.component';

@NgModule({
    declarations: [StatisticsComponent, EntriesExpensesMonthComponent, EntriesExpensesCurrentMonthComponent, EntriesExpensesPastMonthComponent],
    imports: [CommonModule, NgxChartsModule, StatisticsRoutingModule],
})

/**
 * Statistics module
 */
export class StatisticsModule {}
