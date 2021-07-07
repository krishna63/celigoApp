import React, { Suspense, useState } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Header from '../Header';
import AppRoutes from '../routes';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = ({ target }) => {
    setIsLoggedIn(target.checked);
  };

  return (
    <React.Fragment>
      <Header isLoggedIn={isLoggedIn} handleLogIn={handleLogIn} />
      <main style={{ marginTop: '20px' }}>
        <Suspense fallback={<div>Loading ...</div>}>
          <Switch>
            {AppRoutes.map((eachRoute) => {
              return (
                <Route
                  path={eachRoute.routePath}
                  key={eachRoute.uid}
                  exact={eachRoute.exact}
                >
                  <eachRoute.componentName
                    {...eachRoute}
                    isLoggedIn={isLoggedIn}
                    handleLogIn={handleLogIn}
                  />
                </Route>
              );
            })}
          </Switch>
        </Suspense>
      </main>
    </React.Fragment>
  );
};

App.defaultProps = {};

App.propTypes = {};

export default App;
