import 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type {Node} from 'react';
import {SafeAreaView, View, TouchableOpacity, Linking} from 'react-native';

const Footer: () => Node = () => {
  return (
    <View style={{backgroundColor: 'black', marginTop: 40, padding: 20}}>
      <View
        style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.facebook.com')}>
            <Icon name="facebook" size={20} color="#3B5998" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.twitter.com')}>
            <Icon name="twitter" size={20} color="#00ACEE" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.linkedin.com')}>
            <Icon name="linkedin" size={20} color="#0E76A8" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Footer;
