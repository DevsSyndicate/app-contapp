import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '@auth0/auth0-angular';
import { CoreModule } from '@core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AuthModule.forRoot({
            domain: 'dev-ra9of3l5.us.auth0.com',
            clientId: 'PC55pph4zRsuSJc0nUY2ERnLaB9BEDM5',
        }),
        CoreModule,
        AppRoutingModule,
        NgbModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})

/**
 * Main application module
 */
export class AppModule {}
