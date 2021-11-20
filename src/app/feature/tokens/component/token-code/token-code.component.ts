import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-token-code',
  templateUrl: './token-code.component.html',
  styleUrls: ['./token-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenCodeComponent {
  @Input() public visible: boolean = false;
  @Input() public code: string = '';
}
