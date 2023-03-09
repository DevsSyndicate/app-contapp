import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGlobalPositionCardComponent } from './global-position.component';

describe('GlobalPositionCardComponent', () => {
  let component: DashboardGlobalPositionCardComponent;
  let fixture: ComponentFixture<DashboardGlobalPositionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardGlobalPositionCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGlobalPositionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
