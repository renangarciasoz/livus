/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SubscribersComponent } from '../subscribers.component';
import subscribers from '@fixtures/subscribers.json';

it('should render SubscribersComponent', () => {
  const container = render(
    <SubscribersComponent subscribers={subscribers.data} />,
  );
  expect(container).toMatchSnapshot();
});
