/**
 * @description TODO
 * @example
 * import { MikroCompare } from 'mikrocompare';
 *
 * const mikrocompare = new MikroCompare();
 */
export class MikroCompare {
  /**
   * @description Checks if the provided value is exactly the same as the reference.
   * @example
   * mikrocompare.is('abc', 'abc'); // true
   */
  public is(value: string | number, reference: string | number) {
    return value === reference;
  }

  /**
   * @description Checks if the value is defined.
   * @example
   * mikrocompare.exists('abc', true); // true
   */
  public exists(value: string, reference: boolean) {
    const coercedValue = !!value;
    return reference ? coercedValue : !coercedValue;
  }

  /**
   * @description Checks if the provided value is more than the reference.
   * @example
   * mikrocompare.moreThan(4, 2); // true
   */
  public moreThan(value: number, reference: number) {
    return value > reference;
  }

  /**
   * @description Checks if the provided value is more than, or equal to, the reference.
   * @example
   * mikrocompare.moreThanOrEqual(4, 4); // true
   */
  public moreThanOrEqual(value: number, reference: number) {
    return value >= reference;
  }

  /**
   * @description Checks if the provided value is less than the reference.
   * @example
   * mikrocompare.lessThan(4, 8); // true
   */
  public lessThan(value: number, reference: number) {
    return value < reference;
  }

  /**
   * @description Checks if the provided value is less than, or equal to, the reference.
   * @example
   * mikrocompare.lessThanOrEqual(4, 4); // true
   */
  public lessThanOrEqual(value: number, reference: number) {
    return value <= reference;
  }

  /**
   * @description Checks if an array of strings contains a reference string.
   * Case-sensitivity can be adjusted and defaults to false.
   * @example
   * mikrocompare.contains(['something here', 'a DarK day was ahead', 'heroic laziness'], 'dark'); // true (not case-sensitive)
   * mikrocompare.contains(['something here', 'a DarK day was ahead', 'heroic laziness'], 'dark', true); // false (case-sensitive)
   */
  public contains(values: string[], reference: string, isCaseSensitive = false) {
    return (
      values.filter((value: string) => this.includes(value, reference, isCaseSensitive)).length > 0
    );
  }

  /**
   * @description Checks if a string contains a reference substring.
   * Case-sensitivity can be adjusted and defaults to false.
   * @example
   * mikrocompare.includes('a DarK day was ahead', 'dark'); // true (not case-sensitive)
   * mikrocompare.includes('a DarK day was ahead', 'dark', true); // false (case-sensitive)
   */
  public includes(value: string, reference: string, isCaseSensitive = false) {
    const fixedValue = this.getCasedValue(value, isCaseSensitive);
    const fixedReference = this.getCasedValue(reference, isCaseSensitive);

    return fixedValue.includes(fixedReference);
  }

  /**
   * @description Checks if the provided string starts with the reference string.
   * Case-sensitivity can be adjusted and defaults to false.
   * @example
   * mikrocompare.startsWith('Philips light bulb', 'philips'); // true (not case-sensitive)
   * mikrocompare.startsWith('Philips light bulb', 'philips', true); // false (case-sensitive)
   */
  public startsWith(value: string, reference: string, isCaseSensitive = false) {
    const fixedValue = this.getCasedValue(value, isCaseSensitive);
    const fixedReference = this.getCasedValue(reference, isCaseSensitive);

    return fixedValue.startsWith(fixedReference);
  }

  /**
   * @description Checks if the provided string ends with the reference string.
   * Case-sensitivity can be adjusted and defaults to false.
   * @example
   * mikrocompare.endsWith('BigMac', 'mac'); // true (not case-sensitive)
   * mikrocompare.endsWith('BigMac', 'mac', true); // false (case-sensitive)
   */
  public endsWith(value: string, reference: string, isCaseSensitive = false) {
    const fixedValue = this.getCasedValue(value, isCaseSensitive);
    const fixedReference = this.getCasedValue(reference, isCaseSensitive);

    return fixedValue.endsWith(fixedReference);
  }

  /**
   * @description Get a properly cased string based on whether or not
   * it will be used in a case-sensitive use case or not.
   */
  private getCasedValue(value: string, isCaseSensitive: boolean) {
    return isCaseSensitive ? value : value.toLowerCase();
  }
}
