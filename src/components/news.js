import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {
  Text,
  useColorScheme,
  View,
  Image,
  Linking,
  StyleSheet,
} from 'react-native';

const SectionNews = ({title, subtitle, image, article, linkTo}): Node => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, {color: 'red'}]}>{title}</Text>
      <Text>{subtitle}</Text>
      <Text style={[styles.sectionDescription]}>
        <View style={{width: 300, flex: 1, flexDirection: 'row'}}>
          <Image
            style={{height: 100, width: 100, marginRight: 10}}
            source={{uri: image}}
          />
          <Text style={{flexShrink: 1}}>
            {article}
            <Text
              style={{color: 'blue'}}
              onPress={() => Linking.openURL(linkTo)}>
              continue reading...
            </Text>
          </Text>
        </View>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default SectionNews;
