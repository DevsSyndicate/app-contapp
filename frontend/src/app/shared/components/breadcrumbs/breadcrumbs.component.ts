import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    standalone: true,
    imports: [CommonModule, RouterModule],
    selector: 'app-shared-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

export class SharedBreadcrumbsComponent {
    @Input() public title: string;

    @Input() public linkUrl: string;

    @Input() public linkText: string;

    @Input() public buttonUrl: string;

    @Input() public buttonText: string;
}
