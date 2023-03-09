import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntriesExpensesMonthComponent } from './entries-expenses-month.component';

describe('EntriesExpensesMonthComponent', () => {
  let component: EntriesExpensesMonthComponent;
  let fixture: ComponentFixture<EntriesExpensesMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntriesExpensesMonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntriesExpensesMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
