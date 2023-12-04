import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mee-using-ngfor',
  standalone: true,
  imports: [],
  template: `
    <p>
      using-ngfor works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsingNgforComponent {

}
