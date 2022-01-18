import 'react-native-gesture-handler';
import React, { useContext } from "react";
import {Node, useState} from 'react';
import {Alert} from 'react-native';
import {TasksContextProvider} from '../contexts/TasksContext';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './drawer-navigator';
import Home from '../containers/home';
import Tasks from '../containers/tasksToDo';
import LoginUser from '../containers/login';
import { AuthContext } from "../contexts/loginContext";

const MyDrawer = createDrawerNavigator();

const Main = props => {
  const [users, setUsers] = useState({name: '', email: ''});
  const {changeLoginStatus} = useContext(AuthContext);

  const Logout = () => {
    const isLogout = () => {
      {
        changeLoginStatus(false);
      }
      setUsers({name: '', email: ''});
    };
    Alert.alert(
      'Sign out',
      "You won't be able to see your tasks from this app",
      [
        {
          text: 'Cancel',
          onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => isLogout(),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            'This alert was dismissed by tapping outside of the alert dialog.',
          ),
      },
    );

    console.log('Logout');
  };

  return (
    <TasksContextProvider>
      <NavigationContainer>
        <MyDrawer.Navigator
          drawerContent={props => <DrawerContent {...props} Logout={Logout} />}>
          <MyDrawer.Screen name="Home" component={Home} />
          <MyDrawer.Screen name="Tasks" component={Tasks} />
          <MyDrawer.Screen name="LoginUser" component={LoginUser} />
        </MyDrawer.Navigator>
      </NavigationContainer>
    </TasksContextProvider>
  );
};

export default Main;
