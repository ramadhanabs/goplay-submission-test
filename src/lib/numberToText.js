/* eslint-disable import/prefer-default-export */
import numberToWords from 'number-to-words';

export const numberToText = (input) => {
  const commaMatcher = /,/g;
  const dashMatcher = /-/g;

  if (!input) return;
  const str = numberToWords.toWords(input);
  return str.replace(commaMatcher, '').replace(dashMatcher, ' ');
};
