/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { NavigationComponent } from '../navigation.component';
import { URL_SUBSCRIBERS } from 'constants/urls';

it('should render NavigationComponent', () => {
  const container = render(
    <NavigationComponent currentNavigation={URL_SUBSCRIBERS} />,
  );
  expect(container).toMatchSnapshot();
});
