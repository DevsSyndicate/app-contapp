import { Injectable } from '@angular/core';

import { MovementsTranformerInterface } from '../../domain/interfaces/movements-transformer.interface';
import { ApiMovement, ApiMovements } from '../../domain/models/movement-api.model';
import { Movement, MovementFormData, Movements } from '../../domain/models/movement.model';

@Injectable()

/**
 * Movements transformer
 */
export class MovementsTranformer implements MovementsTranformerInterface {
    public getListFromApi(apiMovements: ApiMovements): Movements {
        return {
            current_page: apiMovements.current_page,
            total: apiMovements.total,
            data: apiMovements.data.map((apiMovement: ApiMovement) => this.getFromApi(apiMovement)),
        };
    }

    public getFromApi(apiMovement: ApiMovement): Movement {
        return {
            id: apiMovement.id,
            name: apiMovement.name,
            date: apiMovement.date,
            type: apiMovement.type.toString(),
            amount: apiMovement.amount,
            category: apiMovement.category,
            account: apiMovement.account,
        };
    }

    public getFormFromApi(movement: Movement): MovementFormData {
        return {
            id: movement.id,
            name: movement.name,
            date: movement.date,
            type: movement.type.toString(),
            amount: movement.amount,
            category: parseInt(movement.category.id),
            account: parseInt(movement.account.id),
        };
    }
}
