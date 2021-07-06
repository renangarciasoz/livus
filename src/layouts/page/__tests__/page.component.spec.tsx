/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PageLayout } from '../page.component';

it('should render PageLayout', () => {
  const container = render(
    <PageLayout title="PageLayout" description="PageLayout">
      <h1>PageLayout</h1>
    </PageLayout>,
  );
  expect(container).toMatchSnapshot();
  expect(container.getByText('PageLayout')).toBeInTheDocument();
});
