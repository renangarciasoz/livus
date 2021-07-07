/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ClassesCatalogComponent } from '../classes-catalog.component';
import classesCatalogMock from '@fixtures/classes_catalog.json';

it('should render ClassesCatalogComponent', () => {
  const container = render(
    <ClassesCatalogComponent
      title={classesCatalogMock.creator.classes_catalog.title}
      classes={classesCatalogMock.creator.classes_catalog.classes}
    />,
  );
  expect(container).toMatchSnapshot();
});
