import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { MovementsPresentationAdapter } from '../../adapters/movements.adapter';

import { AccountsPublicModels } from '@features/accounts/public.api';

@Component({
    selector: 'app-movements-accounts-resume',
    templateUrl: './accounts-resume.component.html',
})

/**
 * Movements accounts resume component
 */
export class MovementsAccountsComponent {
    public accounts$: Observable<AccountsPublicModels.AccountPublic[]> = this.movementsAdapter.getAccounts();

    constructor(private readonly movementsAdapter: MovementsPresentationAdapter) {

    }
}
