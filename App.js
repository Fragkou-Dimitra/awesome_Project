/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './src/components/drawer-navigator';
import type {Node} from 'react';
import Home from './src/containers/home';
import Tasks from './src/containers/tasksToDo';
import LoginUser from './src/containers/login';
import {TasksContextProvider} from './src/contexts/TasksContext';
import {AuthProvider} from './src/contexts/loginContext';

//const MyDrawer = createDrawerNavigator();

const App: () => Node = () => {
  return (
    <AuthProvider>
      <LoginUser />
    </AuthProvider>
  );
};

export default App;
