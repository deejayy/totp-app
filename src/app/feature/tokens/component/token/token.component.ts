import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Token } from '@shared/model/token.model';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenComponent {
  @Input() public token: Token = {
    key: 'Xa189237',
    code: '451236',
    label: 'tokenlabel',
    timeLeft: 18,
    visible: true,
  };
  @Output() public copy: EventEmitter<string> = new EventEmitter<string>();
  @Output() public freeze: EventEmitter<void> = new EventEmitter<void>();
  @Output() public unfreeze: EventEmitter<void> = new EventEmitter<void>();
  @Output() public toggle: EventEmitter<string> = new EventEmitter<string>();
}
