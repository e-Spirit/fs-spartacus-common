import { MergeStrategy } from '../util';
import { InjectionToken } from '@angular/core';
import { ContentSlotData } from '@spartacus/core';

/**
 * This data class represents the slots that are included in a page and are managed by FirstSpirit.
 */
export class FirstSpiritManagedSlot {
  /**
   * The name of the slot that is provided by SAP and should be enhanced.
   * If the slot is also available in SAP Commerce this should be the same as in SAP Commerce.
   */
  name: string;
  mergeStrategy?: InjectionToken<MergeStrategy<ContentSlotData>>;
}
