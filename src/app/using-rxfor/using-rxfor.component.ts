import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mee-using-rxfor',
  standalone: true,
  imports: [],
  template: `
    <p>
      using-rxfor works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsingRxforComponent {

}
