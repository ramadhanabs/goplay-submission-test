import { describe, it, vi, expect } from 'vitest';
import { render, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Loading from '..';

describe('Loading component', () => {
  it('Should render', () => {
    const { getByTestId } = render(<Loading />, {
      wrapper: BrowserRouter,
    });

    expect(getByTestId('loadingComponent')).toBeInTheDocument();
  });
});
