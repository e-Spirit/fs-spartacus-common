import { FirstSpiritManagedSlot } from '../config/first-spirit-managed-slot';
import { arrayify } from './arrays';

/**
 * This helper function creates a list of FirstSpiritManagedSlots from given slot names.
 * To override slots from SAP Commerce these need to be equal to the names used in SAP Commerce.
 * @param slotNames A list of slot names to be provided as simple strings.
 */
export function fromSlotList(...slotNames: string[]): FirstSpiritManagedSlot[] {
  return arrayify(slotNames)
    .filter(Boolean)
    .map(
      (slotName): FirstSpiritManagedSlot => {
        return { name: slotName };
      }
    );
}
