import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MovementsServiceInterface } from '../../domain/interfaces/movements-service.interface';
import { ApiMovements } from '../../domain/models/movement-api.model';
import { Movement, MovementFormData } from '../../domain/models/movement.model';

import { ApiService } from '@core/infrastructure/api/api.service';
import { environment } from '@env/environment';

@Injectable()

/**
 * Movements service
 */
export class MovementsService implements MovementsServiceInterface {
    public ApiUrl = `${environment.ApiUrl}/movements`;

    constructor(protected apiService: ApiService) {}

    public getList(page: string, perPage: string): Observable<ApiMovements> {
        const params = new HttpParams().set('page', page).set('perPage', perPage);

        return this.apiService.get<ApiMovements>(this.ApiUrl, { params });
    }

    public get(id: string): Observable<Movement> {
        return this.apiService.get<Movement>(`${this.ApiUrl}/${id}`);
    }

    public add(resource: MovementFormData): Observable<Movement> {
        return this.apiService.post<Movement>(this.ApiUrl, resource);
    }

    public update(resource: MovementFormData, id: string) {
        return this.apiService.put(`${this.ApiUrl}/${id}`, resource);
    }

    public delete(id: string) {
        return this.apiService.delete(`${this.ApiUrl}/${id}`);
    }

    public getListSelect(): Observable<Array<{ id: string; text: string }>> {
        return this.apiService
            .get<Movement[]>(`${this.ApiUrl}/select`)
            .pipe(map((response: Movement[]) => response.map((element) => ({ id: element.id, text: element.name }))));
    }
}
