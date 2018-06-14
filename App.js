import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import store from './store';
import MainScreen from './screens/MainScreen';

/**
 * Provider: componente especial de react-redux, permite que el
 * store este disponible a todos los container components de la 
 * aplicación si tener que pasar estos de manera explicita. Este 
 * componente recibe un único parámetro llamado store el cual es, 
 * como su nombre indica, la instancia del Store que usamos.
 * @see https://redux.js.org/basics/usage-with-react#passing-the-store
 * @see https://github.com/reduxjs/react-redux/blob/master/docs/api.md#provider-store 
*/

export default class App extends Component {
  render() {
    const MainNavigator = StackNavigator({
       Main: { screen: MainScreen }
    });

    return (
      <Provider store={store}>      
          <MainNavigator />        
      </Provider>
    );
  }
}
