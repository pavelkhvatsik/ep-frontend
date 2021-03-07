import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './assets/theme';
import routes from './routes';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Suspense fallback={<div />}>
            <Switch>
              {routes.map(route => (
                <Route
                  key={route.id}
                  path={route.path}
                  exact={route.exact}
                  render={props => <route.component {...props} />}
                />
              ))}
            </Switch>
          </Suspense>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
