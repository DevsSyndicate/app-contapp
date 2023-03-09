import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsExpensesPastMonthComponent } from './statistics-expenses-past-month.component';

describe('StatisticsExpensesPastMonthComponent', () => {
  let component: StatisticsExpensesPastMonthComponent;
  let fixture: ComponentFixture<StatisticsExpensesPastMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatisticsExpensesPastMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsExpensesPastMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
