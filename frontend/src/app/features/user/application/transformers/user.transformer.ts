import { Injectable } from '@angular/core';

import { UserTranformerInterface } from '../../domain/interfaces/user-transformer.interface';
import { ApiUser, User } from '../../domain/models/user.model';

@Injectable()

/**
 * User transformer
 */
export class UserTranformer implements UserTranformerInterface {
    public getUserFromApi(apiUser: ApiUser): User {
        return {
            name: apiUser.data.name,
        };
    }
}
