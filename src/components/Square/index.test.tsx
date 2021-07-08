import Square,{XO} from '.'
import { render,within } from '@testing-library/react';
test('renders Square without crashing', () => {
    render(<Square position={0} xo={null}ß/>);
});
test('renders X in square', () => {
    const { getByTestId } = render(<Square position={0} xo={XO.X} />)
    const { getByText } = within(getByTestId('square'))
    expect(getByText('X')).toBeInTheDocument()
});
  