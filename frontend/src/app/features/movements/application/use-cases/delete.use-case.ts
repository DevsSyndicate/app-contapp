import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { MovementsRepositoryInterface } from '../../domain/interfaces/movements-repository.interface';

import { environment } from '@env/environment';

@Injectable()

/**
 * Create movements use case
 */
export class DeleteMovementsUseCase {
    public ApiUrl = `${environment.ApiUrl}/movements`;

    constructor(@Inject('MovementsRepositoryInterface') private readonly movementsRepository: MovementsRepositoryInterface) {

    }

    public delete(id: string): Observable<boolean> {
        return this.movementsRepository.delete(this.ApiUrl, id);
    }
}
