import { FirstSpiritManagedPage } from './first-spirit-managed-page';
import { fromSlotList } from '../util';
import { PageType } from '@spartacus/core';

describe('The FirstSpiritManagedPage', () => {
  it('should set the correct properties using the static functions to configure first spirit managed pages', () => {
    const fsDrivenPage = FirstSpiritManagedPage.integrateFsDrivenPages('MyTemplate', fromSlotList('Slot1', 'Slot2'));
    expect(fsDrivenPage.sapPageIdentifier).toBeUndefined();
    expect(fsDrivenPage.sapPageType).toBeUndefined();
    expect(fsDrivenPage.isFirstSpiritOnly).toBeTrue();
    expect(fsDrivenPage.template).toEqual('MyTemplate');
    expect(fsDrivenPage.slots.length).toBe(2);
    expect(fsDrivenPage.slots[0]).toEqual({ name: 'Slot1' });
    expect(fsDrivenPage.slots[1]).toEqual({ name: 'Slot2' });

    const enhancedSapPage = FirstSpiritManagedPage.enhanceSapPages('MyTemplate', fromSlotList('Slot1', 'Slot2'));
    expect(enhancedSapPage.sapPageIdentifier).toBeUndefined();
    expect(enhancedSapPage.sapPageType).toBeUndefined();
    expect(enhancedSapPage.isFirstSpiritOnly).toBeFalse();
    expect(enhancedSapPage.template).toEqual('MyTemplate');
    expect(enhancedSapPage.slots.length).toBe(2);
    expect(enhancedSapPage.slots[0]).toEqual({ name: 'Slot1' });
    expect(enhancedSapPage.slots[1]).toEqual({ name: 'Slot2' });

    const fsDrivenPageWithSapSkeleton = FirstSpiritManagedPage.integrateFsDrivenPagesIntoSapSkeleton(
      'homepage',
      PageType.CONTENT_PAGE,
      'MyTemplate',
      fromSlotList('Slot1', 'Slot2')
    );
    expect(fsDrivenPageWithSapSkeleton.sapPageIdentifier).toEqual('homepage');
    expect(fsDrivenPageWithSapSkeleton.sapPageType).toEqual(PageType.CONTENT_PAGE);
    expect(fsDrivenPageWithSapSkeleton.isFirstSpiritOnly).toBeTrue();
    expect(fsDrivenPageWithSapSkeleton.template).toEqual('MyTemplate');
    expect(fsDrivenPageWithSapSkeleton.slots.length).toBe(2);
    expect(fsDrivenPageWithSapSkeleton.slots[0]).toEqual({ name: 'Slot1' });
    expect(fsDrivenPageWithSapSkeleton.slots[1]).toEqual({ name: 'Slot2' });
  });
});
