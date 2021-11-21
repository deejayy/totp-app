import { LOCALE_ID, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiCallerModule } from '@deejayy/api-caller';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TokenStoreModule } from '@shared/module/token-store/token-store.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { initStateFromLocalStorage as tokenStoreMetaReducer } from '@shared/module/token-store/store/token-store-meta.reducer';

export const MATERIAL = [MatIconModule];

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...MATERIAL,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
      {} as any,
      {
        metaReducers: [tokenStoreMetaReducer],
        runtimeChecks: {
          strictStateImmutability: false,
        },
      },
    ),
    EffectsModule.forRoot(),
    ApiCallerModule,
    StoreDevtoolsModule.instrument({
      name: 'TOTP App',
      maxAge: 200,
      logOnly: environment.production,
    }),
    TokenStoreModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'en-US' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
