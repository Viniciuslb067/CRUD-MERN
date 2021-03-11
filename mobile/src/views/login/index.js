import React, {useState} from 'react'
import { useNavigation } from "@react-navigation/native"
import  AsyncStorage  from '@react-native-community/async-storage'
import { View, Text, TouchableOpacity, TextInput} from "react-native"
import styles from "./styles"

import api from '../../services/api'


export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigation = useNavigation()

  function navigateToDashboard() {
    navigation.navigate("Dashboard")
  }

  async function handleSubmit() {
     const res = await api.post('/users/login', {email, password})

      const {token, id_user, user_name, user_type} = res.data

      if(res.data.status === 1) {

        await AsyncStorage.multiSet([
          ['&user-token', token],
          ['&id-user', id_user],
          ['&name-user', user_name],
          ['&user-type', user_type]
       
        ])

        navigateToDashboard()

      } else if(res.data.status === 2){
        alert('' + res.data.error)
     }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.names}>Email</Text>
              <TextInput 
              placeholder="Email"
              style={styles.input}
              onChangeText={text => setEmail(text)}
              ></TextInput>
            <Text style={styles.names}>Senha</Text>
              <TextInput 
              secureTextEntry
              placeholder="Senha"
              style={styles.input}
              onChangeText={text => setPassword(text)}
              ></TextInput>
            <TouchableOpacity>
            <Text onPress={() => handleSubmit()} style={styles.button}>ENTRAR</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
