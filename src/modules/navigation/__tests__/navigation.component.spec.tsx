/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { NavigationComponent } from '../navigation.component';

it('should render NavigationComponent', () => {
  const container = render(<NavigationComponent />);
  expect(container).toMatchSnapshot();
  expect(container.getByText('NavigationComponent')).toBeInTheDocument();
});
