import './global.css';

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from './src/theme/ThemeProvider';
import { store } from './src/store';
import RootNavigator from './src/navigation/RootNavigator';


export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </Provider>
  )
};
