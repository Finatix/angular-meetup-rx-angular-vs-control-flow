import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'mee-root',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage, RouterOutlet, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="my-4 text-center font-extralight text-4xl">Welcome to {{title}}!</h1>

    <nav>
      <ul class="flex space-x-4 my-4 items-center align-middle justify-center">
        <li class="p-2 bg-slate-300 shadow rounded"><a class="text-slate-700 cursor-pointer" [routerLink]="['/', 'ng-for']" routerLinkActive="underline">ng-for</a></li>
        <li class="p-2 bg-slate-300 shadow rounded"><a class="text-slate-700 cursor-pointer" [routerLink]="['/', 'rx-for']" routerLinkActive="underline">rx-for</a></li>
        <li class="p-2 bg-slate-300 shadow rounded"><a class="text-slate-700 cursor-pointer" [routerLink]="['/', 'at-for']" routerLinkActive="underline">at-for</a></li>
        <li class="p-2 bg-slate-300 shadow rounded"><a class="text-slate-700 cursor-pointer" [routerLink]="['/', 'at-for-and-defer']" routerLinkActive="underline">at-for-and-defer</a></li>
      </ul>
    </nav>

    <main class="bg-slate-200 p-8 text-center">
      <section>
        <router-outlet></router-outlet>
      </section>
    </main>

    <footer>
    <section>
      <p>More Rendering</p>
      <img [ngSrc]="'assets/martin-adams-pTCcJSBOTxY-unsplash.jpg'" width="10633" height="4000" alt="">
    </section>
    </footer>

  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-meetup-rx-angular-gegen-control-flow';
}
