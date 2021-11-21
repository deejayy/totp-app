import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenEditComponent } from './page/token-edit/token-edit.component';
import { TokenFormComponent } from './component/token-form/token-form.component';
import { TokenEditRoutingModule } from '@feature/token-edit/token-edit-routing.module';

@NgModule({
  declarations: [TokenEditComponent, TokenFormComponent],
  imports: [CommonModule, TokenEditRoutingModule],
})
export class TokenEditModule {}
