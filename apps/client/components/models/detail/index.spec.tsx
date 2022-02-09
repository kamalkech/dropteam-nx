import { render } from '@testing-library/react';

import Post from '.';

describe('Post', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Post post={null} />);
    expect(baseElement).toBeTruthy();
  });
});
