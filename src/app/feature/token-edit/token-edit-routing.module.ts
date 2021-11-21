import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenFormComponent } from '@feature/token-edit/component/token-form/token-form.component';

const subRoutes: Routes = [
  {
    path: '',
    component: TokenFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(subRoutes)],
  exports: [RouterModule],
})
export class TokenEditRoutingModule {}
