/**
 * This interface defines the strategy for SAP Commerce content to merge with FirstSpirit content.
 * A MergeStrategy can be set per {@link FirstSpiritManagedSlot}.
 */
export interface MergeStrategy<T> {
  merge(aObject: T, anotherObject: T): T;
}
