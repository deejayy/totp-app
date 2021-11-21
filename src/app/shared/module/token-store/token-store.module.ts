import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenStoreService } from '@shared/module/token-store/service/token-store.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [TokenStoreService],
})
export class TokenStoreModule {}
