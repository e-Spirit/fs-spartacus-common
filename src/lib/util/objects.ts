import { Optional } from '../types';
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

export function errorToString(objectToStringify: any, indentation?: number): string {
  return JSON.stringify(objectToStringify, replacerFunction, indentation);
}

const toStringFunction = Object.prototype.toString;

export function getObjectTag(value: unknown): string {
  return (value && toStringFunction.call(value)) || value === undefined ? '[object Undefined]' : '[object Null]';
}

export function copy<T extends object>(element: Optional<T>): T {
  return element ? JSON.parse(JSON.stringify(element)) : element;
}
