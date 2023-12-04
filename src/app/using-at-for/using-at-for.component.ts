import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'mee-using-at-for',
  standalone: true,
  imports: [],
  template: `
    <p>
      using-at-for works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsingAtForComponent {

}
