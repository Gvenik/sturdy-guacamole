import React, { Suspense } from 'react';
import { Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';

import SidebarLayout from "./containers/SidebarLayout";
const Content = React.lazy(() => import('./containers/Content'));

function App() {
    return (
        <Suspense fallback={<div>loading</div>}>
      <BrowserRouter>
        <Switch>
            <Route
                exact
                path="/:categoryId"
                render={({ history, match}) => (
                    <SidebarLayout history={history}>
                        <Content match={match}/>
                    </SidebarLayout>
                )}
            />
            <Route
                exact
                path="/"
                render={({ history }) => (
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
