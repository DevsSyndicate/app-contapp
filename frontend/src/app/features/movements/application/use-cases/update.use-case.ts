import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MovementsRepositoryInterface } from '../../domain/interfaces/movements-repository.interface';
import { Movement, MovementFormData } from '../../domain/models/movement.model';
import { MOVEMENTS_API_URL } from '../constants/api.const';

@Injectable()

/**
 * Update movements use case
 */
export class UpdateMovementsUseCase {
    constructor(@Inject('AccountsRepositoryInterface') private readonly movementsRepository: MovementsRepositoryInterface) {

    }

    public update(movement: MovementFormData, id: string): Observable<Movement> {
        return this.movementsRepository.update<Movement>(MOVEMENTS_API_URL, movement, id);
    }
}
