import React, { Suspense } from 'react'
import { Redirect, Switch } from 'react-router-dom';

import { CContainer } from '@coreui/react';

import routes from '../routes';

import VendorRoute from '../middleware/VendorRoute';
import AdminRoute from '../middleware/AdminRoute';
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const Content = () => {
  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {

              return route.component && (

                (route.protected === 'admin') ?
                <AdminRoute
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  component={route.component} /> :
                  <VendorRoute
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  component={route.component} />
              )
            })}
            <Redirect from="/" to="/unathorized" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(Content)
