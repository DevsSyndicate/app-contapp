import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesTableComponent } from '@sections/categories/components/table/table.component';

describe('CategoriesTableComponent', () => {
    let component: CategoriesTableComponent;
    let fixture: ComponentFixture<CategoriesTableComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CategoriesTableComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CategoriesTableComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
