/* eslint-disable max-classes-per-file */
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveConfigModule } from '@deejayy/reactive-config';
import { RuntimeLocalizerModule } from '@deejayy/runtime-localizer';
import { environment } from '@env/environment';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FrameModule } from '@shared/frame/frame.module';

import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenStoreModule } from '@shared/module/token-store/token-store.module';
import { initStateFromLocalStorage as tokenStoreMetaReducer } from '@shared/module/token-store/store/token-store-meta.reducer';

export class ConfigVars {
  public apiUrl!: string;
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    FrameModule,
    MatIconModule,
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
    StoreDevtoolsModule.instrument({
      name: 'TuFA',
      maxAge: 200,
      logOnly: environment.production,
    }),
    TokenStoreModule,
    ReactiveConfigModule.forRoot(ConfigVars, { configPath: environment.config }),
    RuntimeLocalizerModule.forRoot([
      {
        lang: 'en-US',
        path: '/assets/messages/messages.en-US.json',
      },
      {
        lang: 'hu-HU',
        path: '/assets/messages/messages.hu-HU.json',
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
