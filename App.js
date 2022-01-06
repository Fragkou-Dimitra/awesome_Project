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
import {AuthContext} from './src/contexts/loginContext';
import {AuthProvider} from './src/contexts/loginContext';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
const MyDrawer = createDrawerNavigator();


const App: () => Node = () => {
  return (
    <AuthProvider>
      <TasksContextProvider>
        <NavigationContainer>
          <MyDrawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}>
            <MyDrawer.Screen name="Home" component={Home} />
            <MyDrawer.Screen name="Tasks" component={Tasks} />
          </MyDrawer.Navigator>
        </NavigationContainer>
      </TasksContextProvider>
    </AuthProvider>
  );
};

export default App;
