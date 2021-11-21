import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from '@shared/model/token.model';
import { TokenStoreService } from '@shared/module/token-store/service/token-store.service';

@Component({
  selector: 'app-token-form',
  templateUrl: './token-form.component.html',
  styleUrls: ['./token-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenFormComponent {
  public form: FormGroup = new FormGroup({
    key: new FormControl(),
    label: new FormControl(),
  });

  constructor(private router: Router, private tokenService: TokenStoreService) {}

  public save() {
    this.tokenService.addToken(this.form.value as Token);
    this.router.navigateByUrl('/tokens');
  }

  public goBack() {
    this.router.navigateByUrl('/tokens');
  }
}
