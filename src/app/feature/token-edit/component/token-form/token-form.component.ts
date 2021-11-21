import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-token-form',
  templateUrl: './token-form.component.html',
  styleUrls: ['./token-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenFormComponent {}
