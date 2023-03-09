import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesExpensesCurrentMonthComponent } from './entries-expenses-current-month.component';

describe('EntriesExpensesCurrentMonthComponent', () => {
  let component: EntriesExpensesCurrentMonthComponent;
  let fixture: ComponentFixture<EntriesExpensesCurrentMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntriesExpensesCurrentMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriesExpensesCurrentMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
