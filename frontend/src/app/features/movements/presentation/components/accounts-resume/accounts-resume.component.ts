import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { MovementsPresentationFacade } from '../../facades/movements.facade';

import { AccountsPublicModels } from '@features/accounts/public.api';

@Component({
    selector: 'app-movements-accounts-resume',
    templateUrl: './accounts-resume.component.html',
})

/**
 * Movements accounts resume component
 */
export class MovementsAccountsComponent {
    public accounts$: Observable<AccountsPublicModels.AccountPublic[]> = this.movementsFacade.getAccounts();

    constructor(private readonly movementsFacade: MovementsPresentationFacade) {

    }
}
