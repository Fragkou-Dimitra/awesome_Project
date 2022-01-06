/*import 'react-native-gesture-handler';
import React,  { useState, useEffect } from 'react';
//import { QueryClient, QueryClientProvider } from 'react-query';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import type {Node} from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { useQuery } from 'react-query';
import TasksContext from '../contexts/TasksContext';
import { useContext } from 'react';
//import TasksFetch, {taaasks} from './fetchtasks';
//import taskToDo from './fetchtask';
//import TasksContextProvider from './.src/contexts/TasksContext';
//import {title} from '../constants/global'
//import TasksContextProvider from '../contexts/TasksContext';



const ToDoList:()=>Node=()=> {
    const [isLoading, setLoading] = useState(true);
    const [data,setData] = useContext(TasksContext)
     const taaasks=useQuery('id' , async () => {
      try {
       const response = await fetch('https://my-json-server.typicode.com/Fragkou-Dimitra/demo/db');
       const json = await response.json();
       console.log(json.tasks);
       setData(json.tasks);
    
     } catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
   }
    );
   const updateItem=(index,newItem)=>{
     let newItemArray=[...data];
     newItemArray[index]=newItem;
     setData(newItemArray)
     //console.log(newItemArray);
   }
    return (
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
    );
    };



    const styles = StyleSheet.create({  
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
      /*const ToDoList:()=>Node=()=> {
    const [data,setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
     const taaasks=useQuery('id' , async () => {
      try {
       const response = await fetch('https://my-json-server.typicode.com/Fragkou-Dimitra/demo/db');
       const json = await response.json();
       
       setData(json.tasks);
    
     } catch (error) {
       console.error(error);
     } finally {
       setLoading(false);
     }
   }
    );
   const updateItem=(index,newItem)=>{
     let newItemArray=[...data];
     newItemArray[index]=newItem;
     setData(newItemArray)
   }
    return (
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
                        {item.status=="done"?(<Icon name="check" size={40} color='black'/>):(<Icon name="star" size={40} color='red'/>)}
                        </Text>
                  </TouchableOpacity >
                  </View>
                  </View> 
              )}
            />
          )}
        </View> 
    );//{item.title,item.status}
    };*/
  
   /* export default ToDoList;*/
