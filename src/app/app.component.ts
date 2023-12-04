import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'mee-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1>Welcome to {{title}}!</h1>

    <nav>
      <ul>
        <li><a class="text-slate-700 cursor-pointer" [routerLink]="['/', 'ng-for']" routerLinkActive="text-underline">ng-for</a></li>
        <li><a class="text-slate-700 cursor-pointer" [routerLink]="['/', 'rx-for']" routerLinkActive="text-underline">rx-for</a></li>
        <li><a class="text-slate-700 cursor-pointer" [routerLink]="['/', 'at-for']" routerLinkActive="text-underline">at-for</a></li>
        <li><a class="text-slate-700 cursor-pointer" [routerLink]="['/', 'at-for-and-defer']" routerLinkActive="text-underline">at-for-and-defer</a></li>
      </ul>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-meetup-rx-angular-gegen-control-flow';
}
