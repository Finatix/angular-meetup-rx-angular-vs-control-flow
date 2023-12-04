import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'mee-print-time-diff',
  standalone: true,
  template: `
    <pre>{{ perf }}</pre>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrintTimeDiffComponent implements OnInit, OnDestroy {
  #perf: number = window.performance.now();
  #perf2?: number;

  get perf(): string { return (this.#perf2 ? this.#perf2 - this.#perf : 0).toFixed(2); }

  ngOnInit(): void {
    this.#perf2 = window.performance.now();
    console.log(this.constructor.name, 'init perf', this.#perf2 - this.#perf);
  }
  ngOnDestroy(): void {
    // console.log(this.constructor.name, 'destroy perf', this.perf);
  }
}
