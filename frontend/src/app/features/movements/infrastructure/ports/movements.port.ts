import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CreateMovementsUseCase } from '../../application/use-cases/create.use-case';
import { DeleteMovementsUseCase } from '../../application/use-cases/delete.use-case';
import { GetMovementsUseCase } from '../../application/use-cases/get.use-case';
import { UpdateMovementsUseCase } from '../../application/use-cases/update.use-case';
import { MovementsPortInterface } from '../../domain/interfaces/movements-port.interface';
import { ApiMovements } from '../../domain/models/movement-api.model';
import { Movement, MovementFormData } from '../../domain/models/movement.model';

@Injectable()

/**
 * Movements port to intercat bewteen infrastructrue and application layer
 */
export class MovementsPort implements MovementsPortInterface {
    constructor(
        private readonly createMovementsUseCase: CreateMovementsUseCase,
        private readonly updateMovementsUseCase: UpdateMovementsUseCase,
        private readonly deleteMovementsUseCase: DeleteMovementsUseCase,
        private readonly getMovementsUseCase: GetMovementsUseCase
    ) {}

    public getList(page: string, perPage: string): Observable<ApiMovements> {
        return this.getMovementsUseCase.getList(page, perPage);
    }

    public get(id: string): Observable<Movement> {
        return this.getMovementsUseCase.get(id);
    }

    public create(movement: MovementFormData): Observable<Movement> {
        return this.createMovementsUseCase.create(movement);
    }

    public update(movement: MovementFormData, id: string): Observable<Movement> {
        return this.updateMovementsUseCase.update(movement, id);
    }

    public delete(id: string): Observable<boolean> {
        return this.deleteMovementsUseCase.delete(id);
    }
}
