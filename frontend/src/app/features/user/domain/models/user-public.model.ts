import { User } from './user.model';

/**
 * User public model
 */
export interface UserPublic extends User {
    name: string;
}
