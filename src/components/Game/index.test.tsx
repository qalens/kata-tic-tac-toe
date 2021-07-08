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
test('shouldNotSetValueToOOnClickingMultipleTimes', () => {
    const { getByTestId } = render(<Game/>);
    getByTestId('square-1').click()
    getByTestId('square-1').click()
    const { getByText } = within(getByTestId('square-1'))
    expect(getByText('X')).toBeInTheDocument();
});
test('shouldDeclareWinner', () => {
    const { getByTestId } = render(<Game/>);
    getByTestId('square-0').click()
    getByTestId('square-1').click()
    getByTestId('square-2').click()
    getByTestId('square-3').click()
    getByTestId('square-4').click()
    getByTestId('square-5').click()
    getByTestId('square-6').click()
    const { getByText } = within(getByTestId('winner-text'))
    expect(getByText('X is Winner')).toBeInTheDocument();
});
  