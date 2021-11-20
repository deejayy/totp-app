import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TOKENS_ROUTES } from './feature/tokens/tokens-routing-parent';

const routes: Routes = [...TOKENS_ROUTES];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
