import { Optional } from '../types';

/**
 * This helper function checks if a value exists and returns a default value otherwise.
 * @param value The value to be checked.
 * @param defaultValue This fallback will be returned if no value exists (default: []).
 */
export function nullSafe<T>(value?: T, defaultValue: any = []): T {
  return value || defaultValue;
}

function replacerFunction(key: string, value: any) {
  if (value instanceof Error) {
    const error = {};
    Object.getOwnPropertyNames(value).forEach((valueKey) => {
      error[valueKey] = value[valueKey];
    });
    return error;
  }
  return value;
}

/**
 * This helper function prints an error message that can optionally be indented by a given number of space characters.
 * @param objectToStringify The error object that is converted into a string before it is printed.
 * @param indentation The number of space characters by which the error message is indented.
 * @return The error message as a string which will be printed and optionally indented by the function.
 */
export function errorToString(objectToStringify: any, indentation?: number): string {
  return JSON.stringify(objectToStringify, replacerFunction, indentation);
}

const toStringFunction = Object.prototype.toString;

/**
 * This helper function handles the retrieving of the object tag without running into a null pointer exception.
 * @param value The value to retrieve the object tag from.
 * @return The object tag as a string.
 */
export function getObjectTag(value: unknown): string {
  return (value && toStringFunction.call(value)) || value === undefined ? '[object Undefined]' : '[object Null]';
}

/**
 * This helper function copies any data object.
 * Any functions present in the source element will not be part of the copy.
 * @param element The object to be copied.
 * @return A copy of the source element.
 */
export function copy<T extends object>(element: Optional<T>): T {
  return element ? JSON.parse(JSON.stringify(element)) : element;
}
