import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, computed, signal } from '@angular/core';

export const mySlowFunction = (baseNumber: number): void => {
	let result = 0;
	for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {
		result += Math.atan(i) * Math.tan(i);
	};
}

@Component({
  selector: 'mee-print-time-diff',
  standalone: true,
  template: `
    <pre>TTR: {{ perf() }}</pre>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrintTimeDiffComponent implements OnInit, AfterViewInit {
  readonly #perf = signal(window.performance.now());
  readonly #perf2 = signal(0);
  readonly #id = `${Math.random().toString(32).substring(2)}`;

  perf = computed(() => { return (this.#perf2() - this.#perf()).toFixed(2) })

  constructor(){ console.time(this.constructor.name + '-' + this.#id); mySlowFunction(10); }

  ngOnInit(): void { console.timeLog(this.constructor.name + '-' + this.#id); }
  ngAfterViewInit(): void { this.#perf2.set(window.performance.now()); console.timeEnd(this.constructor.name + '-' + this.#id); }
}

