import React from 'react';
import { Switch } from 'react-router-dom';

import SignIn from '~/pages/SignIn';

import RouteWrapper from './Route';

export default function Routes() {
  return (
    <Switch>
      <RouteWrapper path="/" component={SignIn} />
    </Switch>
  );
}
