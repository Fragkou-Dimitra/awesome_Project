import React, {createContext, useState, useEffect} from 'react';
import { Text, View } from "react-native";
import LoginUser from "../containers/login";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [auth, setAuthState] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const getAuthState = async () => {
    try {
      const response = await fetch(
        'https://my-json-server.typicode.com/Fragkou-Dimitra/demo/db',
      );
      const json = await response.json();
      console.log(json);
      setAuthState(json.profile);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (isLogin===true) {
      getAuthState();
    }
  }, [isLogin]);

  const changeLoginStatus = (status) =>{
    setIsLogin(status);
  }

  return (
    <AuthContext.Provider value={{auth, setAuthState}}>
      {isLogin ? children : <LoginUser changeLoginStatus={changeLoginStatus}/>}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
