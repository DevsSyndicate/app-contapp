import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { TokenService } from '@core/application/services/token.service';

/**
 * Authentication guard
 */
export const AuthGuard = () => {
    const router = inject(Router);
    const tokenService = inject(TokenService);

    return tokenService.getToken() !== null ? true : router.navigate(['/auth/login']);
};
