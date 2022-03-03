import { isString } from './strings';

/**
 * This helper function turns an array into a map, with the help of a function to determine the keys.
 *
 * @param array The array to be transformed.
 * @param keyProvider The logic with which the keys are determined.
 * @returns Map representation of the array which will be returned by the helper function.
 */
export function toMap<KeyType, ValueType>(array: ValueType[], keyProvider: (value: ValueType) => KeyType): Map<KeyType, ValueType> {
  return array.reduce((prevValue, currValue) => prevValue.set(keyProvider(currValue), currValue), new Map<KeyType, ValueType>());
}

/**
 * This helper function removes duplicates from an iterable.
 * @param iterable The iterable whose duplicates are to be removed.
 * @returns The iterable with unique elements which will be returned by the helper function.
 */
export function uniquify<T>(iterable?: Iterable<T>): T[] {
  return [...new Set(iterable)];
}

/**
 * This helper function converts any value to an array to ensure an array is used in future steps.
 * If the given value has a primitive value type, the value will be wrapped in an array.
 * If the given value is an object, each property will be added to the array returned.
 * If the given value is undefined, an empty array will be returned.
 * @param collection The value to be turned into an array (optional).
 */
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
