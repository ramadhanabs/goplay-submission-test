import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { images } from '../__data__/index.mock';
import GridView from '../grid';
import ListView from '../list';

describe('Gallery View component', () => {
  it('Grid view component', () => {
    const { getAllByTestId } = render(<GridView data={images} />);

    expect(getAllByTestId('gridImage')).toHaveLength(4);
  });

  it('List view component', () => {
    const { getAllByTestId } = render(<ListView data={images} />);

    expect(getAllByTestId('listImage')).toHaveLength(4);
  });
});
