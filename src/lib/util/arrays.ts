import { isString } from './strings';

export function toMap<KeyType, ValueType>(array: ValueType[], keyProvider: (value: ValueType) => KeyType): Map<KeyType, ValueType> {
  return array.reduce((prevValue, currValue) => prevValue.set(keyProvider(currValue), currValue), new Map<KeyType, ValueType>());
}

export function uniquify<T>(iterable?: Iterable<T>): T[] {
  return [...new Set(iterable)];
}

export function arrayify(collection?: any): any[] {
  if (isString(collection)) {
    return [collection];
  }
  if (typeof collection === 'undefined') {
    return [];
  }
  if (collection === null) {
    return [null];
  }
  if (Array.isArray(collection)) {
    return collection;
  }
  if (typeof collection.length !== 'number' || typeof collection === 'function') {
    return [collection];
  }

  if (collection.length === 0) {
    return [];
  }

  const arr = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection.hasOwnProperty(i) || i in collection) {
      arr.push(collection[i]);
    }
  }
  if (arr.length === 0) {
    return [collection];
  }
  return arr;
}
