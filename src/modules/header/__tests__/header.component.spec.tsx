/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { HeaderComponent } from '../header.component';

it('should render HeaderComponent', () => {
  const container = render(<HeaderComponent />);
  expect(container).toMatchSnapshot();
});
