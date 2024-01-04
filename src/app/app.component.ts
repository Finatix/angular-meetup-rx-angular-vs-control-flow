import { NgOptimizedImage } from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, ViewEncapsulation} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {RxStrategyProvider} from "@rx-angular/cdk/render-strategies";
import {mySlowFunction} from "./my-slow.function";

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

  private strategyProvider = inject(RxStrategyProvider);

  constructor() {
    requestIdleCallback(() => {
      const result = mySlowFunction();
      console.log(performance.now(), this.constructor.name, 'idle native/result', result)
    });
    setTimeout(() => {
      const result = mySlowFunction();
      console.log(performance.now(), this.constructor.name, 'setTimeout native/result', result)
    });
    Promise.resolve().then(() => {
      const result = mySlowFunction();
      console.log(performance.now(), this.constructor.name, 'Promise native/result', result)
    });
    queueMicrotask(() => {
      const result = mySlowFunction();
      console.log(performance.now(), this.constructor.name, 'queueMicrotask native/result', result)
    });

    this.strategyProvider
      .schedule(() => mySlowFunction(), { strategy: 'idle' })
      .subscribe(result => console.log(performance.now(), this.constructor.name, 'idle rx/result', result));

    this.strategyProvider
      .schedule(() => mySlowFunction(), { strategy: 'low' })
      .subscribe(result => console.log(performance.now(), this.constructor.name, 'low rx/result', result));

    this.strategyProvider
      .schedule(() => mySlowFunction(), { strategy: 'normal' })
      .subscribe(result => console.log(performance.now(), this.constructor.name, 'normal rx/result', result));

    this.strategyProvider
      .schedule(() => mySlowFunction(), { strategy: 'userBlocking' })
      .subscribe(result => console.log(performance.now(), this.constructor.name, 'userBlocking rx/result', result));

    this.strategyProvider
      .schedule(() => mySlowFunction(), { strategy: 'immediate' })
      .subscribe(result => console.log(performance.now(), this.constructor.name, 'immediate rx/result', result));
  }
}
