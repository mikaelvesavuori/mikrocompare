# mikrocompare

**MikroCompare simplifies your comparisons in JavaScript.**

![Build Status](https://github.com/mikaelvesavuori/mikrocompare/workflows/main/badge.svg)

---

While most comparisons can be fairly simple to set up, it can also become tedious quickly. That's why MikroCompare provides a small package of common comparison utilities. Also, it's:

- Tiny (~800 bytes gzipped)
- Zero dependencies
- Has 100% test coverage

## Usage

### Basic importing and usage

```typescript
// ES5 format
const { MikroCompare } = require('mikrocompare');
// ES6 format
import { MikroCompare } from 'mikrocompare';

const mikrocompare = new MikroCompare();

const result = mikrocompare.contains(['something here', 'a DarK day was ahead', 'heroic laziness'], 'dark');
console.log('Does the array contain "dark"?', result);
```

## Features

### Contains

Checks if an array of strings contains a reference string.

Case-sensitivity can be adjusted and defaults to false.

```typescript
mikrocompare.contains(['something here', 'a DarK day was ahead', 'heroic laziness'], 'dark'); // true (not case-sensitive)
mikrocompare.contains(['something here', 'a DarK day was ahead', 'heroic laziness'], 'dark', true); // false (case-sensitive)
```

### Ends with

Checks if the provided string ends with the reference string.

Case-sensitivity can be adjusted and defaults to false.

```typescript
mikrocompare.endsWith('BigMac', 'mac'); // true (not case-sensitive)
mikrocompare.endsWith('BigMac', 'mac', true); // false (case-sensitive)
```

### Exists

Checks if the value is defined.

```typescript
mikrocompare.exists('abc', true); // true
```

### Includes

Checks if a string contains a reference substring.

Case-sensitivity can be adjusted and defaults to false.

```typescript
mikrocompare.includes('a DarK day was ahead', 'dark'); // true (not case-sensitive)
mikrocompare.includes('a DarK day was ahead', 'dark', true); // false (case-sensitive)
```

### Is

Checks if the provided value is exactly the same as the reference.

```typescript
mikrocompare.is('abc', 'abc'); // true
```

### Less than

Checks if the provided value is less than the reference.

```typescript
mikrocompare.lessThan(4, 8); // true
```

### Less than or equal

Checks if the provided value is less than, or equal to, the reference.

```typescript
mikrocompare.lessThanOrEqual(4, 4); // true
```

### More than

Checks if the provided value is more than the reference.

```typescript
mikrocompare.moreThan(4, 2); // true
```

### More than or equal

Checks if the provided value is more than, or equal to, the reference.

```typescript
mikrocompare.moreThanOrEqual(4, 4); // true
```

### Starts with

Checks if the provided string starts with the reference string.

Case-sensitivity can be adjusted and defaults to false.

```typescript
mikrocompare.startsWith('Philips light bulb', 'philips'); // true (not case-sensitive)
mikrocompare.startsWith('Philips light bulb', 'philips', true); // false (case-sensitive)
```

## License

MIT. See `LICENSE` file.
