/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { CreatorProfileComponent } from '../creator-profile.component';
import creatorMock from '@fixtures/creator.json';

it('should render CreatorProfileComponent', () => {
  const container = render(
    <CreatorProfileComponent
      cover={creatorMock.creator.background_url}
      name={creatorMock.creator.name}
      headline={creatorMock.creator.headline}
      image={creatorMock.creator.photo_url}
    />,
  );
  expect(container).toMatchSnapshot();
});
