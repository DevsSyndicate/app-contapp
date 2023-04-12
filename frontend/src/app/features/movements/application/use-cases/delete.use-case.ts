import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MovementsRepositoryInterface } from '../../domain/interfaces/movements-repository.interface';
import { MOVEMENTS_API_URL } from '../constants/api.const';

@Injectable()

/**
 * Create movements use case
 */
export class DeleteMovementsUseCase {
    constructor(@Inject('MovementsRepositoryInterface') private readonly movementsRepository: MovementsRepositoryInterface) {

    }

    public delete(id: string): Observable<boolean> {
        return this.movementsRepository.delete(MOVEMENTS_API_URL, id);
    }
}
