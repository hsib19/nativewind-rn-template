import './global.css';

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from './src/theme/ThemeProvider';
import { store } from './src/store';
import RootNavigator from './src/navigation/RootNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <Provider store={store}>
          <ThemeProvider>
            <RootNavigator />
          </ThemeProvider>
        </Provider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
