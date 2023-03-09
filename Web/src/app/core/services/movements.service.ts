import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '@env/environment';
import { Movement, Movements, MovementsFilter } from '@core/models/movement.model';

@Injectable({
    providedIn: 'root',
})

/**
 * Movements service
 */
export class MovementsService {
    private segment: string;

    constructor(private http: HttpClient, private formBuilder: FormBuilder) {
        this.segment = 'movements';
    }

    /**
     * Get movements
     */
    public index(filters: MovementsFilter | undefined): Observable<Movements> {
        let params = new HttpParams().set('perPage', '50').set('orderBy', 'date');

        // Add filters to request
        if (filters && filters.type) {
            params = params.append('type', filters.type);
        }

        if (filters && filters.month) {
            params = params.append('month', filters.month);
        }

        return this.http.get<Movements>(environment.apiUrl + this.segment, { params });
    }

    /**
     * Get one movement
     */
    public show(id: number): Observable<Movement> {
        return this.http.get<Movement>(environment.apiUrl + this.segment + '/' + id).pipe(map((movement: any) => this.parseDataForClient(movement.item)));
    }

    /**
     * Store new movement
     */
    public store(data: Movement): Observable<Movement> {
        const parsedData: Movement = this.parseDataForServer(data);

        return this.http.post<Movement>(environment.apiUrl + this.segment, parsedData).pipe(map((movement: any) => movement.item));
    }

    /**
     * Update movement
     */
    public update(id: number, data: Movement): Observable<Movement> {
        const parsedData: Movement = this.parseDataForServer(data);

        return this.http.post<Movement>(environment.apiUrl + this.segment + '/' + id, parsedData);
    }

    /**
     * Delete movement
     */
    public delete(id: number): Observable<boolean> {
        return this.http.delete<boolean>(environment.apiUrl + this.segment + '/' + id);
    }

    /**
     * Construct the form
     */
    public createForm(): FormGroup {
        return this.formBuilder.group({
            name: ['', Validators.required],
            type: ['', Validators.required],
            date: ['', Validators.required],
            category: ['', Validators.required],
            amount: ['', Validators.required],
        });
    }

    /**
     * Construct filters form
     */
    public createFiltersForm(): FormGroup {
        return this.formBuilder.group({
            type: [''],
            month: [''],
        });
    }

    /**
     * Parse movement data to send to the server
     */
    private parseDataForServer(movement: Movement): Movement {
        const parsedMovement = movement;

        parsedMovement.date = movement.date.year + '-' + movement.date.month + '-' + movement.date.day;

        return parsedMovement;
    }

    /**
     * Parse movement data for client
     */
    private parseDataForClient(movement: Movement): Movement {
        const parsedMovement = movement;

        parsedMovement.category = movement.category.id;

        parsedMovement.date = {
            year: parseInt(movement.date.split('-')[0], 10),
            month: parseInt(movement.date.split('-')[1], 10),
            day: parseInt(movement.date.split('-')[2], 10),
        };

        return parsedMovement;
    }
}
