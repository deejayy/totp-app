import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokensComponent } from './page/tokens/tokens.component';
import { TokenListComponent } from './component/token-list/token-list.component';
import { TokensRoutingModule } from './tokens-routing.module';
import { TokenComponent } from './component/token/token.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TokenCodeComponent } from './component/token-code/token-code.component';
import { GradientPipe } from './pipe/gradient.pipe';
import { CountdownComponent } from './component/countdown/countdown.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

export const MATERIAL = [MatIconModule, DragDropModule, MatButtonModule];

@NgModule({
  declarations: [
    TokensComponent,
    TokenListComponent,
    TokenComponent,
    TokenCodeComponent,
    GradientPipe,
    CountdownComponent,
  ],
  imports: [...MATERIAL, CommonModule, TokensRoutingModule],
})
export class TokensModule {}
