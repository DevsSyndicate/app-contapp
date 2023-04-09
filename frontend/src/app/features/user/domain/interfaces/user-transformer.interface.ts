import { ApiUser, User } from '../models/user.model';

/**
 * User transformer interface
 */
export interface UserTranformerInterface {
    /**
     * Transform api user to user
     */
    getUserFromApi: (apiUser: ApiUser) => User;
}
