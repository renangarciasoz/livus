import React from 'react';
import { useCreator } from '../hooks/useCreator';
import { CreatorProfileComponent } from './creator-profile.component';

export const CreatorProfile = () => {
  const { data } = useCreator();
  return (
    <CreatorProfileComponent
      name={data?.creator.name}
      headline={data?.creator.headline}
      cover={data?.creator.background_url}
      image={data?.creator.photo_url}
    />
  );
};
