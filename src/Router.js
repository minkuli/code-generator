import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App';
import Logout from './layout/body/logout';
import OldCodes from './layout/body/oldCodes';
import NewCodes from './layout/body/newCodes';
import JoanHomeCodes from './layout/body/joanHomeCodes';
import JDBA from './layout/body/jdba';
import Instructions from './layout/body/instructions'; 
import CreatedCodes from './layout/body/createdCodes';

const routes = [
    {
        path: "/", 
        component: App,
        exact: true
    },
    {
        path: "/logout",
        component: Logout
    },
    {
        path: "/old_codes",
        component: OldCodes
    },
    {
        path: "/new_codes",
        component: NewCodes
    },
    {
        path: "/joan_home_codes",
        component: JoanHomeCodes
    },
    {
        path: "/jdba",
        component: JDBA
    },
    {
        path: "/instructions",
        component: Instructions
    },
    {
        path: "/created_codes",
        component: CreatedCodes
    }
]

const Router = () => (
    <BrowserRouter>
    <Switch>
          {routes.map((route, i) => (
            <Route
            path={route.path}
            render={props => (
              <route.component {...props} routes={route.routes} />
            )}
            exact={route}
          />
          ))}
        </Switch>
    </BrowserRouter>
)


export default Router;