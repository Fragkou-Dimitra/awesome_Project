/*import React, {createContext, useState,useEffect  } from 'react'

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
const [auth, setAuthState] = useState([]);
const [isLoading,setLoading] = useState(true);
const getAuthState=async () => {
    try {
     const response = await fetch('https://my-json-server.typicode.com/Fragkou-Dimitra/demo/db');
     const json = await response.json();
     setAuthState(json.profile);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }
 useEffect(() => {
  getAuthState();
}, []);  

 

  return (

<AuthContext.Provider value={{auth, setAuthState }}>

      {children}

    </AuthContext.Provider>

  );

};


export { AuthContext, AuthProvider };*/