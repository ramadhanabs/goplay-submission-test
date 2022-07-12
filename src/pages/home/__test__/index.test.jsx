import { describe, it, vi, expect } from 'vitest';
import { render, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Homepage from '..';

describe('Home page', () => {
  it('Should render page with header', () => {
    const { getByRole } = render(<Homepage />, {
      wrapper: BrowserRouter,
    });

    const heading = getByRole('heading', { level: 1 });
    const { getByText } = within(heading);
    expect(getByText('Goplay Frontend Engineer Test')).toBeTruthy();
  });
  it('Should render three card', () => {
    const { getAllByTestId } = render(<Homepage />, {
      wrapper: BrowserRouter,
    });
    expect(getAllByTestId('cardHome')).toHaveLength(3);
  });
});
