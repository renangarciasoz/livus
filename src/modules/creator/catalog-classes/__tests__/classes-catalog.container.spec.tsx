/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ClassesCatalog } from '../classes-catalog.container';
import classesCatalogMock from '@fixtures/classes_catalog.json';

jest.mock('react-query', () => ({
  useQuery: () => ({
    isLoading: false,
    error: {},
    data: classesCatalogMock,
  }),
}));
it('should render ClassesCatalog', () => {
  const container = render(<ClassesCatalog />);
  expect(container).toMatchSnapshot();
});
