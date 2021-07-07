/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Subscribers } from '../subscribers.container';
import subscribersMock from '@fixtures/subscribers_1.json';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { page: '1' },
  }),
}));
jest.mock('react-query', () => ({
  useQuery: () => ({
    isLoading: false,
    error: {},
    data: subscribersMock,
    refetch: jest.fn(),
  }),
}));

it('should render Subscribers', () => {
  const container = render(<Subscribers />);
  expect(container).toMatchSnapshot();
});
