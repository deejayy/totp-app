import { Routes } from '@angular/router';
import { TokensComponent } from './page/tokens/tokens.component';

export const TOKENS_ROUTES: Routes = [
  {
    path: 'tokens',
    component: TokensComponent,
    loadChildren: () => {
      return import('./tokens.module').then((m) => {
        return m.TokensModule;
      });
    },
  },
];
