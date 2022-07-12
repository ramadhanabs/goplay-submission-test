import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NumberToText from '..';

const expectedValue = 'one thousand';
vi.mock('../../../lib/helper/numberToText', () => ({
  numberToText: vi.fn(() => expectedValue),
}));

describe('Number to Text App', () => {
  it('Should return "one thousand" on input "1000"', () => {
    const { getByTestId } = render(<NumberToText />, {
      wrapper: BrowserRouter,
    });
    const input = getByTestId('inputField');
    fireEvent.change(input, { target: { value: 1000 } });
    expect(getByTestId('convertedTextField')).toHaveTextContent(expectedValue);
  });
});
