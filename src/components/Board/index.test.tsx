import Board from '.'
import { render } from '@testing-library/react';
test('renders Board without crashing', () => {
    render(<Board values = {[null,null,null,null,null,null,null,null,null]}/>);
  });
  