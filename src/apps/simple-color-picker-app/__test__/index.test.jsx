import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import SimpleColorPickerApp from '..';

const color = '#ffffff';
vi.mock('../../../lib/helper/colorGenerator', () => ({
  generateArrayofColor: vi.fn(() => ({
    collection_1: [color],
  })),
}));

describe('Simple Color Picker app', () => {
  it('Should show hex color onclick button colorbox', () => {
    const { debug, getAllByTestId, getByTestId } = render(
      <SimpleColorPickerApp />,
      { wrapper: BrowserRouter }
    );
    const [button] = getAllByTestId('buttonColorBox');
    fireEvent.click(button);
    expect(getByTestId('selectedColorField')).toHaveTextContent(color);
  });
});
