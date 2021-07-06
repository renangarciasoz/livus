/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { SubscribersComponent } from '../subscribers.component';
import subscribersMock from '@fixtures/subscribers_1.json';

it('should render SubscribersComponent', () => {
  const container = render(
    <SubscribersComponent
      subscribers={subscribersMock.creator.subscribers}
      currentPage={1}
      handleChange={jest.fn()}
    />,
  );
  expect(container).toMatchSnapshot();
});
