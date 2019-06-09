import { CssBaseline } from '@material-ui/core';
import Theme from 'components/Theme';
import configureStore, { history } from 'configure-store';
import { ConnectedRouter } from 'connected-react-router/immutable';
import React from 'react';
import { Provider } from 'react-redux';
import routes from 'routes';
import NavigationHeader from 'views/components/NavigationHeader';
import './App.scss';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Theme>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <CssBaseline />
          <NavigationHeader />
          {routes}
        </ConnectedRouter>
      </Provider>
    </Theme>
  );
};

export default App;
