import {AfterViewInit, ChangeDetectionStrategy, Component, computed, OnInit, signal} from '@angular/core';
import {mySlowFunction} from "../my-slow.function";

@Component({
  selector: 'mee-print-time-diff',
  standalone: true,
  template: `
    <pre>TTR: {{ perf() }}</pre>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrintTimeDiffComponent implements AfterViewInit {
  readonly #perf = signal(window.performance.now());
  readonly #perf2 = signal(0);
  readonly #id = `${Math.random().toString(32).substring(2)}`;

  perf = computed(() => { return (this.#perf2() - this.#perf()).toFixed(2) })

  // constructor(){ console.time(this.constructor.name + '-' + this.#id); mySlowFunction(); }
  constructor(){ mySlowFunction(); }

  // ngOnInit(): void { console.timeLog(this.constructor.name + '-' + this.#id); }
  ngAfterViewInit(): void { this.#perf2.set(window.performance.now()); /*console.timeEnd(this.constructor.name + '-' + this.#id);*/ }
}

