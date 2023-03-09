import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DashboardService } from '@core/services/dashboard.service';
import { GlobalPosition } from '@core/models/dashboard/global-position.model';

@Component({
    selector: 'app-dashboard-global-position-card',
    templateUrl: './global-position.component.html',
    styleUrls: ['./global-position.component.scss'],
})

/**
 * Global position card
 */
export class DashboardGlobalPositionCardComponent implements OnInit {
    public globalPosition!: GlobalPosition;
    public globalPositionForm!: FormGroup;
    public submitted!: boolean;
    public modalRef!: NgbModalRef;

    constructor(private dashboardService: DashboardService, private modalService: NgbModal) {}

    public ngOnInit(): void {
        this.globalPositionForm = this.dashboardService.createGlobaPositionForm();

        this.getGlobalPosition();
    }

    /**
     * Form getter
     */
    public get form(): any {
        return this.globalPositionForm.controls;
    }

    /**
     * Open modal
     */
    public open(content: TemplateRef<any>): void {
        this.modalRef = this.modalService.open(content);
    }

    /**
     * Form submission
     */
    public submit(): void {
        this.submitted = true;

        if (this.globalPositionForm.valid) {
            this.dashboardService.updateGlobalPosition(this.globalPositionForm.value).subscribe(() => {
                this.close();
                this.getGlobalPosition();
            });
        }
    }

    /**
     * Close modal
     */
    public close(): void {
        this.globalPositionForm.reset();
        this.submitted = false;
        this.modalRef.close();
    }

    /**
     * Get global position
     */
    private getGlobalPosition(): void {
        this.dashboardService.getGlobalPosition().subscribe((position: GlobalPosition) => {
            this.globalPosition = position;
        });
    }
}
