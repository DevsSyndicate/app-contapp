import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { GlobalPosition } from '@core/models/dashboard/global-position.model';

@Injectable()

/**
 * Dashboard service
 */
export class DashboardService {
    private segment: string;

    constructor(private http: HttpClient, private formBuilder: FormBuilder) {
        this.segment = 'dashboard';
    }

    /**
     * Get global position information
     */
    public getGlobalPosition(): Observable<GlobalPosition> {
        return this.http.get<GlobalPosition>(environment.apiUrl + this.segment + '/global-position');
    }

    /**
     * Update global position information
     */
    public updateGlobalPosition(data: GlobalPosition): Observable<GlobalPosition> {
        return this.http.post<GlobalPosition>(environment.apiUrl + this.segment + '/global-position', data);
    }

    /**
     * Construct global position the form
     */
    public createGlobaPositionForm(): FormGroup {
        return this.formBuilder.group({
            amount: ['', [Validators.required]],
        });
    }
}
