/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import LoginUser from './src/containers/login';
import {AuthProvider} from './src/contexts/loginContext';

const App: () => Node = () => {
  return (
    <AuthProvider>
      <LoginUser />
    </AuthProvider>
  );
};

export default App;
