import { getObjectTag } from './objects';

export function isString(value?: unknown): value is string {
  const valueType = typeof value;
  return (
    valueType === 'string' ||
    (valueType === 'object' && value != null && !Array.isArray(value) && getObjectTag(value) === '[object String]')
  );
}
