import 'react-native-gesture-handler';
import React from 'react';
import {useContext, useState, useEffect} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
//import { useQuery } from 'react-query';
//import TasksContextProvider from './.src/contexts/TasksContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  Text,
  useColorScheme,
  FlatList,
  View,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import User from '../components/user';
import SectionNews from '../components/news';
import Article from '../components/article';
import Footer from '../components/footer';
import {TasksContext} from '../contexts/TasksContext';
import Tasks from './tasksToDo';

const Home: () => Node = ({navigation}) => {
  const [data, setData] = useContext(TasksContext);
  const queryClient = new QueryClient();
  const [isLoading] = useState(false);
  // const [count,setCount]=useState(0);
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const handleEmpty = () => {
    return <Text style={{color: 'white'}}> No completed tasks! </Text>;
  };
  let tasksDone = data
    .filter(function (item) {
      return item.status === 'done';
    })
    .map(function ({id, title, status}) {
      return {id, title, status};
    });

  return (
    <SafeAreaView style={(backgroundStyle, {flex: 1})}>
      <StatusBar />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor: 'plum'}}>
        <View style={styles.MyHeader}>
          <Image
            style={{height: 200, width: 200}}
            source={require('../../images/cat.png')}
          />
          <QueryClientProvider client={queryClient}>
            <User />
          </QueryClientProvider>
        </View>
        <View style={styles.container}></View>
        <View>
          <View>
            <Text
              style={{
                alignContent: 'center',
                fontWeight: '300',
                fontSize: 30,
                marginTop: 30,
                padding: 10,
              }}>
              Tasks done
            </Text>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginBottom: 32,
              }}
            />
            <View style={styles.listContainer}>
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <FlatList
                  scrollEnabled={true}
                  nestedScrollEnabled={true}
                  style={styles.flatListContainer}
                  data={tasksDone}
                  keyExtractor={({id}) => id}
                  renderItem={({item, index}) => (
                    <Text>
                      {item.status === 'done' && (
                        <View style={styles.row}>
                          <Text>
                            <View style={styles.row_cell_title}>
                              <Text style={styles.row_title}>{item.title}</Text>
                            </View>
                          </Text>
                          <View style={styles.row_cell_status}>
                            <Text>
                              <Icon name="check" size={40} color="purple" />
                            </Text>
                          </View>
                        </View>
                      )}
                    </Text>
                  )}
                  ListEmptyComponent={handleEmpty}
                />
              )}
            </View>
          </View>

          <Text
            style={{
              alignContent: 'center',
              fontWeight: '300',
              fontSize: 30,
              marginTop: 30,
              padding: 10,
            }}>
            News
          </Text>
          <View style={{borderBottomColor: 'black', borderBottomWidth: 1}} />
          <SectionNews
            title="Why broken African phones are shipped to Europe"
            subtitle="Eric Arthur does not have much time for hobbies - he spends most weekends driving all over Ghana collecting broken mobile phones."
            image="https://ichef.bbci.co.uk/news/976/cpsprodpb/109E3/production/_121476086_whatsappimage2021-11-08at10.55.43.jpg"
            article="From his home in Cape Coast he can rove more than 100 miles (160km) in one weekend visiting repair shops and scraps yards - anywhere that has a decent supply of broken devices. In a good weekend he can collect 400 of them. On top of that, he manages a team of six agents doing the same thing in other parts of the country, and between them they expect to collect around 30,000 phones this year."
            linkTo="https://w<ww.bbc.com/news/business-59161682"></SectionNews>
          <SectionNews
            title="Myanmar coup: The women abused and tortured in detention"
            subtitle="Women in Myanmar have been tortured, sexually harassed and threatened with rape in custody, according to accounts obtained by the BBC."
            image="https://ichef.bbci.co.uk/news/976/cpsprodpb/9908/production/_121867193_image005.jpg"
            article="Five women who were detained for protesting against a military coup in the country earlier this year say they were abused and tortured in the detention system after their arrests. Their names have been changed in the following accounts to protect their safety. Warning: this piece contains disturbing descriptions of abuse. Since Myanmars military seized power in February, protests have swept across the country - and women have played a prominent role in the resistance movement. "
            linkTo="https://www.bbc.com/news/world-asia-59462503"></SectionNews>
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  MyHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
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
  },
  flatListContainer: {
    marginTop: 14,
    alignSelf: 'stretch',
  },
  row: {
    borderRadius: 2,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    fontSize: 20,
  },
  row_cell_status: {
    color: 'white',
    padding: 16,
    flex: 0,
    fontSize: 20,
  },
  row_cell_title: {
    flex: 1,
  },
  doneButton: {
    textAlign: 'center',
    borderRadius: 3,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 10,
  },
});

export default Home;
