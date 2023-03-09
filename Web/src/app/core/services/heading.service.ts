import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()

/**
 * Heading service
 */
export class HeadingService {
    private heading: BehaviorSubject<string>;

    constructor() {
        this.heading = new BehaviorSubject<string>('');
    }

    /**
     * Set heading title
     */
    public setHeading(title: string): void {
        this.heading.next(title);
    }

    /**
     * Get heading title
     */
    public getHeading(): Observable<string> {
        return this.heading.asObservable();
    }
}
