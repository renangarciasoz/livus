/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CreatorProfile } from '../creator-profile.container';
import creatorMock from '@fixtures/creator.json';

jest.mock('react-query', () => ({
  useQuery: () => ({
    isLoading: false,
    error: {},
    data: creatorMock,
  }),
}));
it('should render CreatorProfile', () => {
  const container = render(<CreatorProfile />);
  expect(container).toMatchSnapshot();
});
