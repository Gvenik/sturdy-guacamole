import React, { Suspense } from 'react';
import { Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';

import SidebarLayout from "./containers/SidebarLayout";
// import Content from "./containers/Content";
const Content = React.lazy(() => import('./containers/Content'));

function App() {
    return (
        <Suspense fallback={<div>loading</div>}>
      <BrowserRouter>
        <Switch>
            <Route
                exact
                path="/:categoryName"
                render={({ history, match , location}) => (
                    <SidebarLayout history={history}>
                        <Content match={match} history={history} location={location}/>
                    </SidebarLayout>
                )}
            />
            <Route
                exact
                path="/"
                render={({ history, match }) => (
                    <SidebarLayout history={history}/>
                )}
            />
            <Redirect to="/" />
        </Switch>
      </BrowserRouter>
        </Suspense>
  );
}

export default App;
