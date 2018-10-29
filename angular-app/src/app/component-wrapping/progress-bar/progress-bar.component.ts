import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html'
})
export class ProgressBarComponent {
  // custom inputs
  @Input() id: string;
  @Input() label: string;

  // ngb-progressbar inputs
  @Input() max: number;
  @Input() animated: boolean;
  @Input() striped: boolean;
  @Input() showValue: boolean;
  @Input() type: string;
  @Input() value = 0;
  @Input() height: string;
}
