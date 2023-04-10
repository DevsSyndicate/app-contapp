import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MovementsRepositoryInterface } from '../../domain/interfaces/movements-repository.interface';
import { ApiMovements } from '../../domain/models/movement-api.model';
import { Movement, MovementFormData } from '../../domain/models/movement.model';

import { ApiRepository } from '@core/infrastructure/repositories/api.repository';

@Injectable()

/**
 * Movements to interact with Accounts
 */
export class MovementsRepository implements MovementsRepositoryInterface {
    constructor(private readonly apiRepository: ApiRepository) {}

    public getList(url: string, page: string, perPage: string): Observable<ApiMovements> {
        const params = new HttpParams().set('page', page).set('perPage', perPage);

        return this.apiRepository.get<ApiMovements>(url, { params });
    }

    public get(url: string, id: string): Observable<Movement> {
        return this.apiRepository.get<Movement>(`${url}/${id}`);
    }

    public create<Movement>(url: string, movement: MovementFormData): Observable<Movement> {
        return this.apiRepository.post<Movement>(url, movement);
    }

    public update(url: string, movement: MovementFormData, id: string): any {
        return this.apiRepository.put(`${url}/${id}`, movement);
    }

    public delete(url: string, id: string): Observable<boolean> {
        return this.apiRepository.delete(`${url}/${id}`);
    }
}
