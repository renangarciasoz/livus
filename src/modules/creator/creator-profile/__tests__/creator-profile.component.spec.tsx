/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CreatorProfileComponent } from '../creator-profile.component';

it('should render CreatorProfileComponent', () => {
  const container = render(<CreatorProfileComponent />);
  expect(container).toMatchSnapshot();
});
