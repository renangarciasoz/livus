/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Header } from '../header.container';

it('should render Header', () => {
  const container = render(<Header />);
  expect(container).toMatchSnapshot();
});
