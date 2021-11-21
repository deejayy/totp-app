import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TOKEN_EDIT_ROUTES } from '@feature/token-edit/token-edit-routing-parent';

import { TOKENS_ROUTES } from './feature/tokens/tokens-routing-parent';

const routes: Routes = [
  ...TOKENS_ROUTES,
  ...TOKEN_EDIT_ROUTES,
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/tokens',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
