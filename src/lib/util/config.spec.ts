import { fromSlotList } from './config';

describe('The config utility', () => {
  describe('fromSlotList', () => {
    it('should create an array of FirstSpiritManagedSlot objects from a given string list', () => {
      const slots = fromSlotList('Slot1', 'Slot2');
      expect(slots.length).toBe(2);
      expect(slots[0]).toEqual({ name: 'Slot1' });
      expect(slots[1]).toEqual({ name: 'Slot2' });
    });

    it('should filter empty entries from the string list', () => {
      const slots = fromSlotList('', 'Slot1', undefined, null, '', 'Slot2', '');
      expect(slots.length).toBe(2);
      expect(slots[0]).toEqual({ name: 'Slot1' });
      expect(slots[1]).toEqual({ name: 'Slot2' });
    });
  });
});
