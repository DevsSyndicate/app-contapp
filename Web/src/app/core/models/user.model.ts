/**
 * User model
 */
export interface User {
    id?: number;
    name: string;
    email: string;
    email_verified_at?: string;
    created_at?: string;
    updated_at?: string;
}

/**
 * Authentication model
 */
export interface Authentication {
    access_token: string;
    token_type: string;
    expires_in: number;
    user: User;
}
