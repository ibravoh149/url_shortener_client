import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';
// import '@testing-library/jest-dom';
// import '@testing-library/jest-dom/extend-expect'

// declare module "vitest" {
//   interface Assertion<T = any>
//     extends jest.Matchers<void, T>,
//       TestingLibraryMatchers<T, void> {}
// }
expect.extend(matchers);

afterEach(() => {
  cleanup();
});