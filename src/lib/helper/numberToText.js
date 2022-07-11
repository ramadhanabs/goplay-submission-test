/* eslint-disable import/prefer-default-export */
import numberToWords from 'number-to-words';

export const numberToText = (input) => {
  /* Define regex matcher of comma (,) and dash (-) */
  const commaMatcher = /,/g;
  const dashMatcher = /-/g;

  if (!input) return;
  const str = numberToWords.toWords(input);

  /* Return value with deleted comma and replace dash with whitespace */
  return str.replace(commaMatcher, '').replace(dashMatcher, ' ');
};
