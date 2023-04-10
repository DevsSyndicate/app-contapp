import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MovementsRepositoryInterface } from '../../domain/interfaces/movements-repository.interface';
import { Movement, MovementFormData } from '../../domain/models/movement.model';

import { environment } from '@env/environment';

@Injectable()

/**
 * Update movements use case
 */
export class UpdateMovementsUseCase {
    public ApiUrl = `${environment.ApiUrl}/accounts`;

    constructor(@Inject('AccountsRepositoryInterface') private readonly movementsRepository: MovementsRepositoryInterface) {

    }

    public update(movement: MovementFormData, id: string): Observable<Movement> {
        return this.movementsRepository.update<Movement>(this.ApiUrl, movement, id);
    }
}
