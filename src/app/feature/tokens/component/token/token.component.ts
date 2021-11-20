import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Token } from '@feature/tokens/model/token.model';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenComponent implements OnInit {
  @Input() public token: Token = {
    key: 'Xa189237',
    code: '451236',
    label: 'tokenlabel',
    timeLeft: 18,
    visible: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
