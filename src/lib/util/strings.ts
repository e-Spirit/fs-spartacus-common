import { getObjectTag } from './objects';

/**
 * This helper function checks if a value is a string.
 * @param value The value to be checked.
 * @return True if the value is a string, false otherwise.
 */
export function isString(value?: unknown): value is string {
  const valueType = typeof value;
  return (
    valueType === 'string' ||
    (valueType === 'object' && value != null && !Array.isArray(value) && getObjectTag(value) === '[object String]')
  );
}
