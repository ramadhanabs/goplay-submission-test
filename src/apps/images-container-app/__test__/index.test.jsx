import { describe, it, expect } from 'vitest';
import { render, within, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { DisplayProvider } from '../../../lib/context/display-context';
import ImagesContainerApp from '..';

function AllWrapper({ children }) {
  return (
    <BrowserRouter>
      <DisplayProvider>{children}</DisplayProvider>
    </BrowserRouter>
  );
}

describe('Images Container app', () => {
  it('Should render page with header', async () => {
    const { getByRole } = render(<ImagesContainerApp />, {
      wrapper: BrowserRouter,
    });
    const heading = getByRole('heading', { level: 2 });
    const { findByText } = within(heading);
    expect(await findByText('Images Container')).toBeTruthy();
  });

  it('Should shows "Grid View" on initial render', async () => {
    const { findByTestId } = render(<ImagesContainerApp />, {
      wrapper: AllWrapper,
    });

    expect(await findByTestId('gridView')).toBeInTheDocument();
  });

  it('Should change view mode to "List View" on toggle list button click', async () => {
    const { findByTestId } = render(<ImagesContainerApp />, {
      wrapper: BrowserRouter,
    });
    const listButton = await findByTestId('listButton');
    fireEvent.click(listButton);
    expect(await findByTestId('listView')).toBeInTheDocument();
  });
});
