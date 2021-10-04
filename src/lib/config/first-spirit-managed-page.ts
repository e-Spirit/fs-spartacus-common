import { PageType } from '@spartacus/core';
import { FirstSpiritManagedSlot } from './first-spirit-managed-slot';

export class FirstSpiritManagedPage {
  private _sapPageIdentifier?: string;
  private _sapPageType?: PageType;
  private _template: string;
  private _slots: FirstSpiritManagedSlot[];
  private _isFirstSpiritOnly: boolean;

  private constructor(config: {
    sapPageIdentifier?: string;
    sapPageType?: PageType;
    template: string;
    slots: FirstSpiritManagedSlot[];
    isFirstSpiritOnly: boolean;
  }) {
    const { sapPageIdentifier, slots, sapPageType, template, isFirstSpiritOnly } = config || {};
    this._sapPageIdentifier = sapPageIdentifier;
    this._sapPageType = sapPageType;
    this._template = template;
    this._slots = slots;
    this._isFirstSpiritOnly = isFirstSpiritOnly;
  }
  get sapPageIdentifier(): string | undefined {
    return this._sapPageIdentifier;
  }

  get sapPageType(): PageType | undefined {
    return this._sapPageType;
  }

  get template(): string {
    return this._template;
  }

  get slots(): FirstSpiritManagedSlot[] {
    return this._slots;
  }

  get isFirstSpiritOnly(): boolean {
    return this._isFirstSpiritOnly;
  }

  public static integrateFsDrivenPagesIntoSapSkeleton(
    sapPageIdentifier: string,
    sapPageType: PageType,
    fsTemplate: string,
    slots: FirstSpiritManagedSlot[]
  ): FirstSpiritManagedPage {
    return new FirstSpiritManagedPage({ sapPageIdentifier, sapPageType, template: fsTemplate, slots, isFirstSpiritOnly: true });
  }

  public static integrateFsDrivenPages(fsTemplate: string, slots: FirstSpiritManagedSlot[]): FirstSpiritManagedPage {
    return new FirstSpiritManagedPage({ template: fsTemplate, slots, isFirstSpiritOnly: true });
  }

  public static enhanceSapPages(sapTemplate: string, slots: FirstSpiritManagedSlot[]): FirstSpiritManagedPage {
    return new FirstSpiritManagedPage({ template: sapTemplate, slots, isFirstSpiritOnly: false });
  }
}
