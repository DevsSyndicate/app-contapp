import { Injectable } from '@angular/core';

import { TokenServiceInterface } from '../../domain/interfaces/token-service.interface';

@Injectable()

/**
 * Token service
 */
export class TokenService implements TokenServiceInterface {
    public setToken(token: string): void {
        localStorage.setItem('auth_token', token);
    }

    public getToken(): string {
        return localStorage.getItem('auth_token');
    }
}
