import Square,{XO} from '.'
import { render,within } from '@testing-library/react';
test('renders Square without crashing', () => {
    render(<Square position={0} xo={null}/>);
});
test('renders X in square', () => {
    const { getByTestId } = render(<Square position={0} xo={XO.X} />)
    const { getByText } = within(getByTestId('square-0'))
    expect(getByText('X')).toBeInTheDocument()
});
test('renders O in square', () => {
    const { getByTestId } = render(<Square position={0} xo={XO.O} />)
    const { getByText } = within(getByTestId('square-0'))
    expect(getByText('O')).toBeInTheDocument()
});
test('renders null in square', () => {
    const { getByTestId } = render(<Square position={0} xo={null} />)
    const { getByText } = within(getByTestId('square-0'))
    expect(getByText('')).toBeInTheDocument();
});
test('calls onClick set by parent', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Square position={0} xo={null} onClick={onClick}/>)
    getByTestId('square-0').click()
    expect(onClick).toBeCalledWith(0)
});