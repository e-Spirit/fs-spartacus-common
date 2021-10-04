import { isString } from './strings';

export function toPercentageValue(percentageValue: number, baseValue: number, decimals: number = 2): string {
  const usedBaseValue = toIntValue(baseValue, 0);
  const usedPercentageValue = toIntValue(percentageValue, 0);
  return usedBaseValue === 0 ? '0' : ((usedPercentageValue / usedBaseValue) * 100).toFixed(decimals);
}

export function toIntValue(value: any, fallback: number = 0): number {
  let result = typeof value === 'number' ? value : null;
  if (isString(value)) {
    result = parseInt(value, 10);
  }
  return result == null || Number.isNaN(result) ? fallback : result;
}

function toRgbValue(value: string | number, min: number = 0, max: number = 255): number {
  const intValue = toIntValue(value, 0);
  return Math.max(Math.min(intValue, max), min);
}

export function toRgbString(
  r: string | number | undefined,
  g: string | number | undefined,
  b: string | number | undefined,
  fallback?: string
): string {
  if (r != null && g != null && b != null) {
    return `rgb(${toRgbValue(r)}, ${toRgbValue(g)}, ${toRgbValue(b)})`;
  }
  return fallback ? fallback : 'rgb(0, 0, 0)';
}
