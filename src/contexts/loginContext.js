import React, {createContext, useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import UserLogin from '../components/userLogin';
import LoginUser from '../containers/login';

const AuthContext = createContext();

const AuthProvider = () => {
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
    if (isLogin) {
      getAuthState();
    }
  }, [isLogin]);

  const changeLoginStatus = status => {
    setIsLogin(status);
    console.log(status)
  };
  
  

  return (
    <AuthContext.Provider value={{auth, setAuthState}}>
      {isLogin ?<UserLogin changeLoginStatus={changeLoginStatus} /> : <LoginUser changeLoginStatus={changeLoginStatus} />}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
