/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreatorPage from '..';

it('should render CreatorPage', () => {
  const container = render(<CreatorPage />);
  expect(container).toMatchSnapshot();
  expect(container.getByText('Em construção')).toBeInTheDocument();
});
