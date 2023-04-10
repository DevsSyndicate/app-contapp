import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MovementsRepositoryInterface } from '../../domain/interfaces/movements-repository.interface';
import { Movement, MovementFormData } from '../../domain/models/movement.model';

import { environment } from '@env/environment';

@Injectable()

/**
 * Create movements use case
 */
export class CreateMovementsUseCase {
    public ApiUrl = `${environment.ApiUrl}/movements`;

    constructor(@Inject('MovementsRepositoryInterface') private readonly movementsRepository: MovementsRepositoryInterface) {

    }

    public create(movement: MovementFormData): Observable<Movement> {
        return this.movementsRepository.create<Movement>(this.ApiUrl, movement);
    }
}
