import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenEditComponent } from './page/token-edit/token-edit.component';
import { TokenFormComponent } from './component/token-form/token-form.component';
import { TokenEditRoutingModule } from '@feature/token-edit/token-edit-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

export const MATERIAL = [MatInputModule, MatFormFieldModule, MatButtonModule];

@NgModule({
  declarations: [TokenEditComponent, TokenFormComponent],
  imports: [...MATERIAL, CommonModule, TokenEditRoutingModule, ReactiveFormsModule],
})
export class TokenEditModule {}
