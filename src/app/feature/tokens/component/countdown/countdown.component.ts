import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { DEFAULT_PERIOD } from '@feature/tokens/model/token.model';

const DEFAULT_RADIUS = 20;
const CIRC_MULTIPLIER = 2;
const FULL_CIRCLE = 360;

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountdownComponent implements OnChanges {
  @Input() public timeLeft: number = 0;
  @Input() public period: number = DEFAULT_PERIOD;

  public radius: number = DEFAULT_RADIUS;

  public rotation: number = 0;
  public dashPosition: number = 0;

  public ngOnChanges() {
    this.rotation = this.timeLeft / this.period * FULL_CIRCLE;
    this.dashPosition = this.timeLeft / this.period * (this.radius * CIRC_MULTIPLIER * Math.PI);
  }
}
