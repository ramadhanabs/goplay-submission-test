import { describe, it, vi, expect, beforeAll, afterEach } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CardHome from '..';

const MOCK_PROPS = {
  title: 'Mock',
  imgUrl: 'mockurl',
  route: '/mock-to',
};

const useNavigateMock = vi.fn();
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => useNavigateMock,
}));

describe('Card component on home page', () => {
  let renderContainer;

  beforeAll(() => {
    renderContainer = (props = MOCK_PROPS) =>
      render(<CardHome {...props} />, { wrapper: BrowserRouter });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Should render card with image, title, and button', () => {
    const { getByTestId } = renderContainer();

    expect(getByTestId('cardHomeBanner')).toBeInTheDocument();
    expect(getByTestId('cardTitle')).toBeInTheDocument();
    expect(getByTestId('cardButtonNavigate')).toBeInTheDocument();
  });

  it('Should call useNavigate with defined route to page when button clicked', () => {
    const { getByTestId } = renderContainer();

    const cardButtonNavigate = getByTestId('cardButtonNavigate');
    fireEvent.click(cardButtonNavigate);

    expect(useNavigateMock).toBeCalledWith(MOCK_PROPS.route);
  });
});
