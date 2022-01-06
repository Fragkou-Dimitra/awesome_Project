import 'react-native-gesture-handler';
import React from 'react';
import { useQuery } from 'react-query';
import type {Node} from 'react';
import { 
  Text,
  View
} from 'react-native';


const User:()=>Node=()=> {
    const { isLoading, error, data } = useQuery('name', () =>
      fetch('https://my-json-server.typicode.com/Fragkou-Dimitra/demo/profile').then(res =>
        res.json() 
      )
    );
    if (isLoading) return <Text>'Loading...'</Text> 
    if (error) return <Text>'An error has occurred: '  {error.message}</Text>
    return (
      <View>    
        <Text h1>{data.name}{' '}</Text>
        <Text style={{color:'blue'}}>{data.email}{' '}</Text>
      </View>
    )
  } 

export default User;