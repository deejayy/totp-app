import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

export interface Token {
  label: string;
  code: string;
  timeLeft: number;
  visible: boolean;
}

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenComponent implements OnInit {
  @Input() public token: Token = {
    code: '451236',
    label: 'tokenlabel',
    timeLeft: 18,
    visible: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
