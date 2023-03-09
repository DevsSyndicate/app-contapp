import { Injectable, Inject } from '@angular/core';
import { Location, DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root',
})

export class LayoutService {

    public privateRoutes: string[];
    public publicRoutes: string[];

    constructor(
        private location: Location,
        @Inject(DOCUMENT) private document: Document
    ) {

        this.privateRoutes = [
            'dashboard',
            'categories',
            'movements',
            'statistics'
        ];

        this.publicRoutes = [
            'login'
        ];

    }

    /**
     * Add body class depending on route
     */
    public addBodyClass(): void {

        if (this.privateRoutes.includes(this.location.path().substring(1))) {
            this.document.body.id = 'page-top';
        }

        if (this.publicRoutes.includes(this.location.path().substring(1))) {
            this.document.body.classList.add('bg-gradient-primary');
        }

    }

}
