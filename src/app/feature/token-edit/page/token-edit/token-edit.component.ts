import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-token-edit',
  templateUrl: './token-edit.component.html',
  styleUrls: ['./token-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenEditComponent {}
