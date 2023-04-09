import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UserPublicModels, UserPublicSelectors } from '@features/user/public.api';

@Component({
    selector: 'app-header-layout',
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})

/**
 * Header layout component
 */
export class HeaderLayoutComponent {
    public user$: Observable<UserPublicModels.UserPublic> = this.store.select(UserPublicSelectors.getUserPublic);

    constructor(private readonly store: Store) {

    }
}
