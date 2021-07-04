/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CreatorPageLayout } from '../creator-page.component';

it('should render CreatorPageLayout', () => {
  const container = render(
    <CreatorPageLayout title="test" description="test">
      <h1>test</h1>
    </CreatorPageLayout>,
  );
  expect(container).toMatchSnapshot();
  expect(container.getByText('test')).toBeInTheDocument();
});
