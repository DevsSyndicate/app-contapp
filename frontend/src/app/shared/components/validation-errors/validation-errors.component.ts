import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ValidationError } from './validation.model';

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'appvalidation-errors',
    templateUrl: './validation-errors.component.html',
})

/**
 * Component to show form validation errors
 */
export class ValidationErrorsComponent implements OnChanges {
    @Input() public errors!: ValidationError;

    public showAlert: boolean;

    public genericMessage!: string;

    public parsedErrors: any;

    constructor() {
        this.showAlert = false;
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.errors?.currentValue) {
            this.showAlert = true;
            this.genericMessage = this.errors.message;
            this.parsedErrors = this.parseErrors();
        }
    }

    /**
	 * Function to parse errors to present
	 */
    private parseErrors(): any[] {
        const parsedErrors: any[] = [];

        Object.entries(this.errors.errors).forEach((entry) => {
            const [key, value] = entry;
            parsedErrors.push({
                field: key,
                errors: value,
            });
        });

        return parsedErrors;
    }
}
