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
test('shouldSetValueToOOnSecondTurn', () => {
    const { getByTestId } = render(<Game/>);
    getByTestId('square-1').click()
    getByTestId('square-5').click()
    const { getByText } = within(getByTestId('square-5'))
    expect(getByText('O')).toBeInTheDocument();
});
  