/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Subscribers } from '../subscribers.container';

it('should render Subscribers', () => {
  const container = render(<Subscribers />);
  expect(container).toMatchSnapshot();
});
