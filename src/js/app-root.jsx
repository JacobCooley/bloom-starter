import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import store from 'redux-store/store';

import AppContainer from 'containers/app-container.jsx';

import 'styles/main.scss';

class AppRoot extends React.Component {
  render() {
    return (
      <BrowserRouter history={ createBrowserHistory() }>
        <Provider store={ store }>
          <AppContainer />
        </Provider>
      </BrowserRouter>
    )
  };
}

export default AppRoot;