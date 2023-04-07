/**
 * Token service interface
 */
export interface TokenServiceInterface {
    /**
     * Set token to LocalStorage
     */
    setToken: (token: string) => void;

    /**
     * Get token from LocalStorage
     */
    getToken: () => string;
}
