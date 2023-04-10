import { AuthenticationData } from '../models/authentication.models';

/**
 * Authentication presentation facade adapter
 */
export interface AuthenticationPresentationAdapterInterface {
    /**
     * Dispatch login action
     */
    login: (data: AuthenticationData) => void;

}
