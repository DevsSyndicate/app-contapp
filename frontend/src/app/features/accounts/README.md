#### Capa presentacional

- Los componentes pertenecientes a la capa presentacional, consumen información o ejecutan acciones a través de una fachada.
- Al interactuar con la fachada, los componentes no saben de que forma se obtiene o manda información, es independiente del detalle de implementación. Por lo tanto, la capa presentacional establece una dependencia unidireccional hacia la capa de infraestructura.
- Por tanto, es responsabilidad de la fachada realizar las acciones pertinentes, ejecutando las operaciones mediante el resto de funciones de la capa de infraestructura.


#### Capa de infraestructura

- La capa de infraestructura se encarga de conectar la interfaz de usuario (capa presentacional) con la lógica de negocio a través de la capa de aplicación.
- De este modo, la capa presentacional no debe preocuparse de como se consumen o mandan los datos, ya que de ello se encarga la capa de infraestructura.
- Dicha capa, recibe una serie de datos de entrada y manda otra serie de datos de salida, conectando con la capa de aplicación que es la que, a través de los casos de uso, se encargará de ejecutar la lógica de negocio definida por el dominio.
- Por tanto, la capa de infraestructura simplemente se encargará de comandar y dirigir el flujo de información hacia los casos de uso debidamente modelados, definiendo una serie de arquitecturas en función de las necesidades sin que la capa de presentación deba preocuparse por como se implemneta la lógica de negocio así como independizando los casos de uso de la interfaz de usuario.


#### Capa de aplicación

- Es la capa encargada de contener los detalles de implementación de cada caso de uso, es decir, es donde se ejecuta la lógica de negocio definda desde la capa de dominio.
- A la capa de infraestructura no le interesa de que modo obtenemos la información o como se definirán los datos, simplemente los consume y recibe procesados en base al modelado de datos definido en la capa de dominio. Por tanto, es la capa encargada de concretar y ejecutar los casos de uso definidos por el dominio y consumidos por la infraestructura, que a su vez son utilizados en la interfaz de usuario.


#### Ejemplo

A modo de ejemplo, el componente presentacional "form" necesita enviar varios datos de un formulario para que se almacenen en la base de datos. Para ello, hace uso de la fachada que se encarga de comenzar la petición de envío.

```typescript
// .../presentation/components/list/list.component.ts
export class AccountsTableComponent {

    constructor(private readonly accountsFacade: AccountsPresentationFacade) {}

    public onSubmit(): void {
        this.accountsFacade.submitForm(this.accountForm.value);
    }
}
```

La fachada, que se encuentra en la propia capa de presentación, recibe la petición y se encarga de lanzar una acción de Ngrx para enviar la información del formulario. Tanto la definición de la fachada como de las acciones, se encuentran en la capa de dominio. Con esto conseguimos que el componente sea agnóstico al modo en que enviamos la información y que éste dependa exclusivamente de la infraestructura para ello.

```typescript
// .../presentation/facades/accounts-presentation.facade.ts
export class AccountsPresentationFacade implements AccountsPresentationFacadeInterface {
    constructor(private readonly store: Store<AccountsState>) {}

    public submitForm(formValues: Account): void {
        this.store.dispatch(SubmitAccountForm({ formValues }));
    }
}

// .../domain/interfaces/accounts-presentation.interface.ts
export interface AccountsPresentationFacadeInterface {
    submitForm: (formValues: Account) => void;
}

// .../domain/state/accounts.actions.ts
export enum AccountsActionTypes {
    SUBMIT_ACCOUNT_FORM = '[Accounts] Submit account form',
    SUBMIT_ACCOUNT_FORM_SUCCESS = '[Accounts] Submit account form success',
}

export const SubmitAccountForm = createAction(AccountsActionTypes.SUBMIT_ACCOUNT_FORM, props<{ formValues: Account }>());
export const SubmitAccountFormSuccess = createAction(AccountsActionTypes.SUBMIT_ACCOUNT_FORM_SUCCESS);
```

Cuando la fachada dispara la acción de Redux, ésta es capturada por los efectos de la Store definidos en la capa de infraestructura. Dichos efectos, se encargarán de llamar a los casos de uso concretos a través de un servicio adaptador.

```typescript
// .../infrastructure/state/accounts.effects.ts
export class AccountsEffects implements AccountsEffectsInterface {
    constructor(
        private readonly actions$: Actions,
        private readonly router: Router,
        private readonly accountsAdapter: AccountsAdapter
    ) {}

    public submitAccountFormForAddNewAccount$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SubmitAccountForm),
            filter(() => /\/accounts\/edit\/\d+/.exec(this.router.url) === null),
            switchMap(({ formValues }) => this.accountsAdapter.create(formValues)),
            map(() => SubmitAccountFormSuccess())
        ));
}

// .../domain/interfaces/accounts-effects.interface.ts
export interface AccountsEffectsInterface {
    submitAccountFormForAddNewAccount$: Observable<Action>;
}
```

El servicio adaptador, que pertenece todavía a la capa de infraestructura es el encargado de llamar al caso de uso particular, en este caso, a la función de crear una cuenta. De este modo, se esatblece una dependencia hacia la capa de aplicación pero no a la inversa, cumpliendo con las reglas de dependencia de fuera hacia dentro.

```typescript
// .../infrastructure/addapters/accounts.adapter.ts
export class AccountsAdapter implements AccountsAdapterInterface {
    constructor(private readonly createAccountUseCase: CreateAccountUseCase) {}

    public create(account: Account): Observable<Account> {
        return this.createAccountUseCase.create(account);
    }
}

// .../domain/interfaces/accounts-adapter.interface.ts
export interface AccountsAdapterInterface {
    create: (accout: Account) => Observable<Account>;
}

```

Al llamarse al caso de uso definido en la capa de aplicación, éste ejecuta el detalle de implementación para el propósito que concierne al caso de uso particular, que en este caso es el de crear una nueva cuenta. Como se puede apreciar, el caso de uso sirve para crear una nueva cuenta en la base de datos, por lo que es necesario que implemente un repositorio, establecido en la capa de dominio, donde se definirá el modo en que se deberán persistir los datos.

```typescript
// .../application/use-cases/create.use-case.ts
export class CreateAccountUseCase {
    public ApiUrl = `${environment.ApiUrl}/accounts`;

    constructor(@Inject('AccountsRepositoryInterface') private readonly accountsRepository: AccountsRepositoryInterface) {

    }

    public create(account: Account): Observable<Account> {
        return this.accountsRepository.create<Account>(this.ApiUrl, account);
    }
}
```

Dado que la capa de dominio define el repositorio de cuentas, es responsabilidad de la capa de infraestructura, nuevamente, concretar de que modo guardaremos la información, en este caso, en la base de datos a través de una Api.

```typescript
// .../infrastructure/repositories/accounts.repository.ts
export class AccountsRepository implements AccountsRepositoryInterface {
    constructor(private readonly apiRepository: ApiRepository) {}

    public create<T>(url: string, body: any): Observable<T> {
        return this.apiRepository.post<T>(url, body);
    }
}

// .../domain/interfaces/accounts-repository.interface.ts
export interface AccountsRepositoryInterface {
    create: <Account>(url: string, body: any) => Observable<Account>;
}

```

Con esta implementación, logramos enviar los datos de un formulario y guardarlos en la base de datos, separando las responsabildades de cada capa y aislándolas convenientemente entre si, estableciendo unas reglas de dependencia correctas que nos desacoplan lo más posible del framework.