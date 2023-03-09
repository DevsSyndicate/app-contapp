import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'core-badge-type',
    templateUrl: './badge-type.component.html',
    styleUrls: ['./badge-type.component.scss'],
})

/**
 * Render element with badge dynamic badge classes
 */
export class BadgeTypeComponent implements OnInit {

    @Input() public type!: string;
    public name!: string;
    public badgeClass!: string;

    constructor() {}

    public ngOnInit(): void {

        // Set type name
        this.setTypeName();

        // Set type class
        this.setTypeClass();

    }

    /**
     * Set type name
     */
    private setTypeName(): void {

        this.name = this.type[0].toUpperCase() + this.type.slice(1).toLowerCase();

    }

    /**
     * Set type class
     */
    private setTypeClass(): void {

        if (this.type === 'expense') {

            this.badgeClass = 'badge-danger';

        } else if (this.type === 'entry') {

            this.badgeClass = 'badge-success';

        }

    }

}
