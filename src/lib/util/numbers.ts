import { isString } from './strings';

/**
 * This helper function calculates the percentage for a given value and its base.
 * @param percent The percent value that is calculated for the given value and base.
 * @param baseValue The base value of the percentage that is calculated.
 * @param decimals The number of decimals to be rounded to (default: 2).
 * @return The percentage of the value of the base value.
 */
export function toPercentageValue(percent: number, baseValue: number, decimals: number = 2): string {
  const usedBaseValue = toIntValue(baseValue, 0);
  const usedPercentageValue = toIntValue(percent, 0);
  return usedBaseValue === 0 ? '0' : ((usedPercentageValue / usedBaseValue) * 100).toFixed(decimals);
}

/**
 * This helper function converts a given value to an Integer.
 * @param value The value to be converted.
 * @param fallback A fallback value to be used if the conversion failed (default: 2).
 * @return Depending on whether the conversion was successful, either the converted value or the fallback is returned.
 */
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

/**
 * This helper function turns three numbers into a CSS-ready RGB string.
 * The values for red, green and blue must be between 0 and 255, else they will be set to the closest limit.
 * If no values are defined the RGB string of black will be returned as a fallback.
 * @param red The value that represents the red color within the RGB string.
 * @param green The value that represents the green color within the RGB string.
 * @param blue The value that represents the blue color within the RGB string.
 * @param fallback If no values are defined the RGB string of black ('rgb(0,0,0)') is returned by default.
 */
export function toRgbString(
  red: string | number | undefined,
  green: string | number | undefined,
  blue: string | number | undefined,
  fallback?: string
): string {
  if (red != null && green != null && blue != null) {
    return `rgb(${toRgbValue(red)}, ${toRgbValue(green)}, ${toRgbValue(blue)})`;
  }
  return fallback ? fallback : 'rgb(0, 0, 0)';
}
