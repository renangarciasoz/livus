import React from 'react';
import { SubscribersComponent } from './subscribers.component';
import subscribers from '@fixtures/subscribers.json';

export const Subscribers = () => {
  return <SubscribersComponent subscribers={subscribers.data} />;
};
