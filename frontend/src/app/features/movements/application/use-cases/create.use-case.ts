import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MovementsRepositoryInterface } from '../../domain/interfaces/movements-repository.interface';
import { Movement, MovementFormData } from '../../domain/models/movement.model';
import { MOVEMENTS_API_URL } from '../constants/api.const';

@Injectable()

/**
 * Create movements use case
 */
export class CreateMovementsUseCase {
    constructor(@Inject('MovementsRepositoryInterface') private readonly movementsRepository: MovementsRepositoryInterface) {

    }

    public create(movement: MovementFormData): Observable<Movement> {
        return this.movementsRepository.create<Movement>(MOVEMENTS_API_URL, movement);
    }
}
