import { AuthenticationData } from '../models/authentication.models';

/**
 * Authentication presentation facade interface
 */
export interface AuthenticationPresentationFacadeInterface {
    /**
     * Dispatch login action
     */
    login: (data: AuthenticationData) => void;

}
