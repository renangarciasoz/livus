/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Footer } from '../footer.container';

it('should render Footer', () => {
  const container = render(<Footer />);
  expect(container).toMatchSnapshot();
});
