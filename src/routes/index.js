import React from 'react';
import { Switch } from 'react-router-dom';

import HelpOrders from '~/pages/HelpOrders';
import Plans from '~/pages/Plans';
import PlanEdit from '~/pages/Plans/Edit';
import PlanNew from '~/pages/Plans/New';
import Registrations from '~/pages/Registrations';
import RegistrationEdit from '~/pages/Registrations/Edit';
import RegistrationNew from '~/pages/Registrations/New';
import SignIn from '~/pages/SignIn';
import Students from '~/pages/Students';
import StudentEdit from '~/pages/Students/Edit';
import StudentNew from '~/pages/Students/New';

import RouteWrapper from './Route';

export default function Routes() {
  return (
    <Switch>
      <RouteWrapper path="/" exact component={SignIn} />
      <RouteWrapper path="/students" exact isPrivate component={Students} />
      <RouteWrapper path="/students/new" isPrivate component={StudentNew} />
      <RouteWrapper
        path="/students/edit/:id"
        isPrivate
        component={StudentEdit}
      />
      <RouteWrapper path="/plans" exact isPrivate component={Plans} />
      <RouteWrapper path="/plans/new" isPrivate component={PlanNew} />
      <RouteWrapper path="/plans/edit/:id" isPrivate component={PlanEdit} />
      <RouteWrapper
        path="/registrations"
        exact
        isPrivate
        component={Registrations}
      />
      <RouteWrapper
        path="/registrations/new"
        isPrivate
        component={RegistrationNew}
      />
      <RouteWrapper
        path="/registrations/edit/:id"
        isPrivate
        component={RegistrationEdit}
      />
      <RouteWrapper
        path="/help-orders"
        exact
        isPrivate
        component={HelpOrders}
      />
    </Switch>
  );
}
