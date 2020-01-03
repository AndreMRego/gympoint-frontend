import React from 'react';
import { Switch } from 'react-router-dom';

import Plans from '~/pages/Plans';
import PlanNew from '~/pages/Plans/New';
import SignIn from '~/pages/SignIn';
import Students from '~/pages/Students';

import RouteWrapper from './Route';

export default function Routes() {
  return (
    <Switch>
      <RouteWrapper path="/" exact component={SignIn} />
      <RouteWrapper path="/students" exact isPrivate component={Students} />
      <RouteWrapper path="/plans" exact isPrivate component={Plans} />
      <RouteWrapper path="/plans/new" isPrivate component={PlanNew} />
    </Switch>
  );
}
