import { Component, OnInit, ChangeDetectionStrategy, Input, OnChanges } from '@angular/core';
import { Token } from '@feature/tokens/model/token.model';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenComponent implements OnChanges {
  @Input() public token: Token = {
    key: 'Xa189237',
    code: '451236',
    label: 'tokenlabel',
    timeLeft: 18,
    visible: true,
  };

  public rotation: number = 0;
  public dashPosition: number = 0;

  public ngOnChanges() {
    this.rotation = this.token.timeLeft / 30 * 360;
    this.dashPosition = this.token.timeLeft / 30 * (20 * 2 * Math.PI);
  }
}
