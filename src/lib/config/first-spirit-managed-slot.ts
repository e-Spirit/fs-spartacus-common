import { MergeStrategy } from '../util';
import { InjectionToken } from '@angular/core';
import { ContentSlotData } from '@spartacus/core';

export class FirstSpiritManagedSlot {
  name: string;
  mergeStrategy?: InjectionToken<MergeStrategy<ContentSlotData>>;
}
