import React from 'react';
import {
  NavLink,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import './About.pcss';

const SharedComponent = () => {
  return <div className="about__content"> About us!!!</div>;
};

const About = (props) => {
  const { path } = useRouteMatch();
  const { subRoutes, isLoggedIn } = props;
  return (
    <div className="about__container">
      <div className="about__subLinks">
        {subRoutes.map((eachSubRoute) => (
          <NavLink
            to={eachSubRoute.routePath}
            key={eachSubRoute.uid}
            activeClassName="active-sub-page"
          >
            {eachSubRoute.displayLabel}
          </NavLink>
        ))}
      </div>

      <Switch>
        {/**
         * as we need to do additional wrapper if the component is not default
         * exported, hence added the routes directly, rather than configuring in the routes file.
         */}
        <Route path={`${path}/company`} component={SharedComponent}></Route>
        <Route path={`${path}/jobs`} component={SharedComponent} />
        <Route
          path={`${path}/editJobs`}
          render={() =>
            isLoggedIn ? <SharedComponent /> : <Redirect to="/signin:true" />
          }
        />
      </Switch>
    </div>
  );
};

export default About;
