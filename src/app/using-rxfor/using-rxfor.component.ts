import { RxFor } from '@rx-angular/template/for';
import { RxIf } from '@rx-angular/template/if';
import { RxLet } from '@rx-angular/template/let';
import {ChangeDetectionStrategy, Component, Input, signal} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PrintTimeDiffComponent } from "../print-time-diff/print-time-diff.component";
import { createList } from '../utils';
import { ReplaySubject, Subject, merge } from 'rxjs';
import { first, map, reduce, scan, startWith, tap } from 'rxjs/operators';
import {RxRenderStrategiesConfig} from "@rx-angular/cdk/render-strategies";
import {RxDefaultStrategyNames, RxStrategyNames} from "@rx-angular/cdk/render-strategies/lib/model";

@Component({
    selector: 'mee-using-rxfor',
    standalone: true,
    template: `
  <mee-print-time-diff/>

  <ul class="flex flex-wrap overflow-auto h-[30vh]" >
    <li *rxFor="let item of items; trackBy: 'id'; strategy: listRenderStrategy; renderCallback: itemsRendered$" class="tile">
      <strong>{{ item.id }}:</strong> <img [ngSrc]="'https://placehold.co/600x' + item.value" width="600" [height]="item.value" alt=""><mee-print-time-diff/>
    </li>
  </ul>
  <p *rxLet="timeForRendering$; let timeForRendering; suspense: timeForRenderingSuspense; strategy: 'immediate'">Time for Rendering: {{ timeForRendering }}ms</p>
  <ng-template #timeForRenderingSuspense>Time for Rendering: in progress</ng-template>
  <mee-print-time-diff/>
  `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RxIf, RxLet, RxFor, NgOptimizedImage, PrintTimeDiffComponent]
})
export class UsingRxforComponent {
  @Input() listRenderStrategy?: RxDefaultStrategyNames = 'normal';

  items = createList();

  // this emits whenever rxFor finished rendering changes
  itemsRendered$ = new Subject<ReturnType<typeof createList>>();
  initialized$ = new ReplaySubject<number>(1);

  timeForRendering$ = merge(this.initialized$, this.itemsRendered$.pipe(first(), map(() => performance.now()))).pipe(
    reduce((prev, curr) => curr - prev),
  );

  constructor() {
    this.initialized$.next(performance.now());
    this.initialized$.complete();
  }
}
