import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import { QueryClient, QueryClientProvider } from 'react-query';
import type {Node} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View
} from 'react-native';
import {TasksContext} from '../contexts/TasksContext';
import { useContext } from 'react';
import Footer from '../components/footer';
//import ToDoList from '../components/tasks';


const Tasks:()=>Node=({navigation})=> {
 // const queryClient = new QueryClient();
  const [data,setData] = useContext(TasksContext)
  const [isLoading] = useState(false);
   
   
   const updateItem=(index,newItem)=>{
     let newItemArray=[...data];
     newItemArray[index]=newItem;
     setData(newItemArray)
     //console.log(newItemArray);
   }
    return (
     
      <ScrollView horizontal={false}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={[styles.sectionContainer, styles.sectionTitle]}>Task-list</Text>
        <View style={styles.listContainer}>
          {isLoading ? <ActivityIndicator/> : (
            <FlatList scrollEnabled={true} nestedScrollEnabled={true} style={styles.flatListContainer }
              data={data}
              keyExtractor={({ id }) => id}            
              renderItem={({ item,index }) => (
                <View style={styles.row}>
                  <View style={styles.row_cell_title}><Text style={styles.row_title}>{item.title}{' : '}</Text></View>          
                  <View style={styles.row_cell_status}>          
                    <TouchableOpacity onPress={() => updateItem(index, {
                      id: item.id, title: item.title, status: item.status==="done"?"not done":"done"
                     
                    })}
                    style={{justifyContent:"center", alignItems:"center"}} >
                      <Text> 
                        {item.status==="done"?(<Icon name="check" size={40} color='black'/>):(<Icon name="star" size={40} color='red'/>)}
                        </Text>
                  </TouchableOpacity >
                  </View>
                  </View> 
              )}
            />
          )}
        </View> 
      </View>
      
    <Footer/></ScrollView>
    );
  }

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
      flexDirection: "column", 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundColor: 'black',
      width:400
    },
    flatListContainer: {
      marginTop: 14,
      alignSelf: "stretch",
    },
    row: {
      borderRadius: 2,
      flex: 1,
      backgroundColor:'grey',
      flexDirection: "row", 
      justifyContent: "flex-start", 
      alignItems: "center",
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 18,
      paddingRight: 16,
      marginLeft: 14,
      marginRight: 14,
      marginTop: 0,
      marginBottom: 6
    },
    row_title: {
      color: 'white',
      textAlignVertical: "top",
      includeFontPadding: false,
      flex: 0,
      fontSize: 20
    },
    row_cell_status: {
      color: 'white',
      padding: 16,
      flex: 0,
      fontSize: 15,
      
    },
    row_cell_title: {
      flex: 1
    },
    doneButton:{
      textAlign:'center',
      borderRadius: 3,
      backgroundColor: 'black',
      color: 'white',
      fontSize:10
    }
    
  });
  
  export default Tasks;
  