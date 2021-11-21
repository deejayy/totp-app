import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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
}
