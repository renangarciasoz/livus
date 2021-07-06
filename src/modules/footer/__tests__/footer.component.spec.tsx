/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FooterComponent } from '../footer.component';

it('should render FooterComponent', () => {
  const container = render(<FooterComponent />);
  expect(container).toMatchSnapshot();
});
