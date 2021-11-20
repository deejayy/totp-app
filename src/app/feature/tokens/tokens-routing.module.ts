import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenListComponent } from './component/token-list/token-list.component';

const subRoutes: Routes = [
  {
    path: '',
    component: TokenListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(subRoutes)],
  exports: [RouterModule],
})
export class TokensRoutingModule {}
