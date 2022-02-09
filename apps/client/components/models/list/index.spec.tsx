import { render } from '@testing-library/react';

import Posts from '.';

describe('Posts', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Posts posts={[]} />);
    expect(baseElement).toBeTruthy();
  });
});
