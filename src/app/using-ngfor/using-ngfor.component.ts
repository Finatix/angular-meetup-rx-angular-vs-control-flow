import { NgFor, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';
import { LIST_SIZE } from '../constants';
import { PrintTimeDiffComponent } from "../print-time-diff/print-time-diff.component";
import { createList } from '../utils';

@Component({
    selector: 'mee-using-ngfor',
    standalone: true,
    template: `
    <mee-print-time-diff/>
    <ul class="flex flex-wrap overflow-auto h-[30vh]" >
      <li *ngFor="let item of items; trackBy: trackById;" class="tile"><strong>{{ item.id }}:</strong> <img [ngSrc]="'https://placehold.co/600x' + item.value" width="600" [height]="item.value" alt=""><mee-print-time-diff/></li>
    </ul>
    <mee-print-time-diff/>
  `,
    styles: ``,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgFor, NgOptimizedImage, PrintTimeDiffComponent]
})
export class UsingNgforComponent {
  items = createList();
  trackById: TrackByFunction<{ id: number; value: number; }> = (_idx, item) => item.id;
}
