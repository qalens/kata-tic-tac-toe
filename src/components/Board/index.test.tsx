import Board from '.'
import { render } from '@testing-library/react';
test('renders Board without crashing', () => {
    render(<Board values = {[null,null,null,null,null,null,null,null,null]}/>);
  });
  test('calls onClick set by parent', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Board values = {[null,null,null,null,null,null,null,null,null]} onClick={onClick}/>);
    getByTestId('square').click()
    expect(onClick).toBeCalledWith(0)
});
  