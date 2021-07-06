/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CreatorProfile } from '../creator-profile.container';

it('should render CreatorProfile', () => {
  const container = render(<CreatorProfile />);
  expect(container).toMatchSnapshot();
});
