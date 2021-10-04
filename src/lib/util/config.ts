import { FirstSpiritManagedSlot } from '../config/first-spirit-managed-slot';
import { arrayify } from './arrays';

export function fromSlotList(...slotNames: string[]): FirstSpiritManagedSlot[] {
  return arrayify(slotNames)
    .filter(Boolean)
    .map(
      (slotName): FirstSpiritManagedSlot => {
        return { name: slotName };
      }
    );
}
