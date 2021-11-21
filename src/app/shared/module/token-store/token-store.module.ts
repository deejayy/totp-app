import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TokenStoreService } from '@shared/module/token-store/service/token-store.service';
import { TokenStoreEffects } from '@shared/module/token-store/store/token-store.effects';
import { TokenStoreFacade } from '@shared/module/token-store/store/token-store.facade';
import { tokenstoreReducer } from '@shared/module/token-store/store/token-store.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('tokenStore', tokenstoreReducer),
    EffectsModule.forFeature([TokenStoreEffects]),
  ],
  providers: [TokenStoreFacade, TokenStoreService],
})
export class TokenStoreModule {}
