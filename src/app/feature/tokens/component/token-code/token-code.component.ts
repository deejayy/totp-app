import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-token-code',
  templateUrl: './token-code.component.html',
  styleUrls: ['./token-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenCodeComponent implements OnChanges {
  @Input() public visible: boolean = false;
  @Input() public code: string = '';

  public chars: string[] = [];

  public ngOnChanges() {
    this.chars = this.code.split('');
  }
}
