import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { loadUser } from '../redux/ducks/auth/actions';
import '../assets/scss/main.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Componenets
import Loading from '../components/common/Loading';
import PrivateRoute from '../components/common/PrivateRoute';
import Register from '../components/authentication/Register';
import Login from '../components/authentication/Login';
import AuthLanding from '../components/auth-landing/AuthLanding';
import GuestLanding from '../components/guest-landing/GuestLanding';
import Search from '../components/auth-landing/Search';
import NotFoundPage from '../components/common/NotFoundPage';
import useComponentDidMount from '../hooks/useComponentDidMount';

const App = props => {
  const { isLoading } = props.auth;

  useComponentDidMount(() => props.loadUser());

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/home/" component={AuthLanding} />
          <PrivateRoute exact path="/search/" component={Search} />
          <Route exact path="/" component={GuestLanding} />
          <Route exact path="/register/" component={Register} />
          <Route exact path="/login/" component={Login} />
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    );
  }
};

App.propTypes = {
  auth: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loadUser }
)(App);
