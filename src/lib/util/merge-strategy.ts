export interface MergeStrategy<T> {
  merge(aObject: T, anotherObject: T): T;
}
