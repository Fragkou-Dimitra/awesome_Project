import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type {Node} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {TasksContext} from '../contexts/TasksContext';
import {useContext} from 'react';
import Footer from '../components/footer';

const Tasks: () => Node = ({navigation}) => {
  const [data, setData] = useContext(TasksContext);
  const [isLoading] = useState(false);

  const updateItem = (index, newItem) => {
    let newItemArray = [...data];
    newItemArray[index] = newItem;
    setData(newItemArray);
  };
  return (
    <View horizontal={false} style={{backgroundColor: 'plum', height: '100%'}}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={[styles.sectionContainer, styles.sectionTitle]}>
          Task-list
        </Text>
        <View style={styles.listContainer}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              scrollEnabled={true}
              nestedScrollEnabled={true}
              style={styles.flatListContainer}
              data={data}
              keyExtractor={({id}) => id}
              renderItem={({item, index}) => (
                <View style={styles.row}>
                  <View style={styles.row_cell_title}>
                    <Text style={styles.row_title}>
                      {item.title}
                      {' : '}
                    </Text>
                  </View>
                  <View style={styles.row_cell_status}>
                    <TouchableOpacity
                      onPress={() =>
                        updateItem(index, {
                          id: item.id,
                          title: item.title,
                          status: item.status === 'done' ? 'not done' : 'done',
                        })
                      }>
                      {item.status === 'done' ? (
                        <Image
                          style={{
                            height: 40,
                            width: 40,
                          }}
                          source={require('../../images/flower.png')}
                        />
                      ) : (
                        <Image
                          style={{height: 40, width: 40}}
                          source={require('../../images/flowerClosed.png')}
                        />
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          )}
        </View>
      </View>
      <Footer />
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
  listContainer: {
    flex: 1,
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: 400,
  },
  flatListContainer: {
    marginTop: 14,
    alignSelf: 'stretch',
  },
  row: {
    borderRadius: 2,
    flex: 1,
    backgroundColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 0,
    marginBottom: 6,
  },
  row_title: {
    color: 'white',
    textAlignVertical: 'top',
    includeFontPadding: false,
    flex: 0,
    fontSize: 30,
  },
  row_cell_status: {
    color: 'white',
    flex: 1,
    paddingTop: 0,
    alignItems: 'center',
  },
  row_cell_title: {
    flex: 1,
    padding: 16,
  },
});

export default Tasks;
