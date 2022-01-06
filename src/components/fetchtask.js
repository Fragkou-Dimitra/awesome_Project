/*import 'react-native-gesture-handler';
import React from 'react';
import { useQuery } from 'react-query';
import   { useState, useEffect } from 'react';

import type {Node} from 'react';
import {
    ActivityIndicator,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    StyleSheet
  } from 'react-native';


    const TaskFetch=async (title) => {
     
        const {data} = await fetch('https://my-json-server.typicode.com/Fragkou-Dimitra/demo/db');
       
                
       
        return data;
      }
       
       
        
     const taskToDo=(title)=>useQuery(['tasks',title],()=>TaskFetch(title))

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
    
      
  export default taskToDo;


  const ToDoList:()=>Node=()=> {
  const [data,setData]=useState([])
  const {data,isLoading}=tasksToDo();
  const updateItem=(index,newItem)=>{ 
    let newItemArray=[...data];
    newItemArray[index]=newItem;
   setData(newItemArray)
  }
  return(


    import { useQuery } from 'react-query';
import  { useState, useEffect } from 'react';

    const TasksFetch=async () => {
      try{
        const response = await fetch('https://my-json-server.typicode.com/Fragkou-Dimitra/demo/db');
        const json=await response.json();
        return json.tasks;
      }catch (error){
        console.error
      }}
        
     const tasksToDo=()=>useQuery('tasks',TasksFetch);

    
      
  export default tasksToDo;*/