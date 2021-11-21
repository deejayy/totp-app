import { Routes } from '@angular/router';
import { TokenEditComponent } from '@feature/token-edit/page/token-edit/token-edit.component';

export const TOKEN_EDIT_ROUTES: Routes = [
  {
    path: 'token-edit',
    component: TokenEditComponent,
    loadChildren: () => {
      return import('./token-edit.module').then((m) => {
        return m.TokenEditModule;
      });
    },
  },
];
