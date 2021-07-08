import Game from '.'
import { render,within } from '@testing-library/react';
test('renders Game without crashing', () => {
    render(<Game/>);
});
test('shouldSetValueToXOnFirstTurn', () => {
    const { getByTestId } = render(<Game/>);
    getByTestId('square-1').click()
    const { getByText } = within(getByTestId('square-1'))
    expect(getByText('X')).toBeInTheDocument();
});
  