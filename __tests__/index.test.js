import reverse from '../src/index.js';
import { wrongReverse } from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});
test('wrongReverse', () => {
    expect(wrongReverse('hello')).toEqual('olleh');
    expect(wrongReverse('')).toEqual('');
  });