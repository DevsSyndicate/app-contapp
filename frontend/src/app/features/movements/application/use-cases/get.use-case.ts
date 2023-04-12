import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MovementsRepositoryInterface } from '../../domain/interfaces/movements-repository.interface';
import { ApiMovements } from '../../domain/models/movement-api.model';
import { Movement } from '../../domain/models/movement.model';
import { MOVEMENTS_API_URL } from '../constants/api.const';

@Injectable()

/**
 * Get movements use case
 */
export class GetMovementsUseCase {
    constructor(@Inject('MovementsRepositoryInterface') private readonly movementsRepository: MovementsRepositoryInterface) {

    }

    public getList(page: string, perPage: string): Observable<ApiMovements> {
        return this.movementsRepository.getList(MOVEMENTS_API_URL, page, perPage);
    }

    public get(id: string): Observable<Movement> {
        return this.movementsRepository.get(MOVEMENTS_API_URL, id);
    }
}
