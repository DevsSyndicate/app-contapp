import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovementsFormComponent } from '@sections/movements/components/form/form.component';

describe('MovementsFormComponent', () => {
    let component: MovementsFormComponent;
    let fixture: ComponentFixture<MovementsFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MovementsFormComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MovementsFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
