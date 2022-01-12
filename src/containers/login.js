import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  StatusBar,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';

const LoginUser = (props): Node => {
  const userAdmin = {
    email: 'dimitra@gmail.com',
    password: '1234',
  };
  const [users, setUsers] = useState({name: '', email: ''});

  const [user, setUser] = useState({name: '', email: '', password: ''});

  const submitHandler = () => {
    if (
      user.email === userAdmin.email &&
      user.password === userAdmin.password
    ) {
      console.log(user);
      props.changeLoginStatus(true);

      setUsers({
        name: user.name,
        email: user.email,
      });
    } else Alert.alert('Error', "User doesn' t match, try again!");
  };

  const handleChange = (details, value) => {
    setUser({
      ...user,
      [details]: value,
    });
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../images/user.png')} />
      <StatusBar />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name"
          placeholderTextColor="#003f5c"
          onChangeText={text => handleChange('name', text)}
          value={user.name}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={text => handleChange('email', text)}
          value={user.email}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={text => handleChange('password', text)}
          value={user.password}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => submitHandler()}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 80,
    height: 80,
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: '#FFC0CB',
    borderRadius: 30,
    width: '70%',
    height: 45,
    marginBottom: 20,

    alignItems: 'center',
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
});

export default LoginUser;
