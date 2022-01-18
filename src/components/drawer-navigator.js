import 'react-native-gesture-handler';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type {Node} from 'react';
import {View, StyleSheet} from 'react-native';

const DrawerContent = (props): Node => {
  return (
    <View
      style={{
        flex: 1,
        height: 10,
        color: 'white',
        inactiveTintColor: 'white',
        backgroundColor: 'pink',
      }}>
      <DrawerContentScrollView {...props}>
        <View style={(styles.drawerContent, {backgroundColor: 'pink'})}>
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="home-outline" color={'white'} size={size} />
            )}
            label="Home"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="calendar" color={'white'} size={size} />
            )}
            label="My Tasks"
            onPress={() => {
              props.navigation.navigate('Tasks');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon name="logout" color={'white'} size={size} />
            )}
            label="Logout"
            onPress={() => {
              props.Logout(),
                props.text === 'Ok'
                  ? props.navigation.navigate('LoginUser')
                  : props.navigation.navigate('Home');
            }}
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
});

export default DrawerContent;
