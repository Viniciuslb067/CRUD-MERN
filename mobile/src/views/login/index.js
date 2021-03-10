import React, {useState} from 'react'
import { useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity, TextInput, Button} from "react-native"
import styles from "./styles"

import api from '../../services/api'
import {login, setIdUser, setNameUser, setTypeUser} from '../../services/auth'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const navigation = useNavigation()

  function navigateToDashboard() {
    navigation.navigate("Dashboard")
  }

  async function handleSubmit() {
     await api.post('/users/login', {email, password})
       .then(res => {
           if(res.data.status === 1) {
               login(res.data.token)
               setIdUser(res.data.id_user)
               setNameUser(res.data.user_name)
               setTypeUser(res.data.user_type)

               navigateToDashboard()
  
           }
          else if(res.data.status === 2){
            alert('' + res.data.error)
         }
       })
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
