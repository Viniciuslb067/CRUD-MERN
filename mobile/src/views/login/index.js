import React, {useState, useEffect} from 'react'
import { useNavigation } from "@react-navigation/native"
import { View, FlatList, Text, TouchableOpacity, TextInput, Button} from "react-native"
import styles from "./styles"

import api from '../../services/api'
import {login, setIdUser, setNameUser, setTypeUser} from '../../services/auth'

export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit() {
    await api.post('/users/login', {email, password})
      .then(res => {
        if(res.status === 200) {
          if(res.data.status === 1) {
              login(res.data.token)
              setIdUser(res.data.id_user)
              setNameUser(res.data.user_name)
              setTypeUser(res.data.user_type)

              console.log('deu bom')
  
          }
        } else if(res.data.status === 2){

          console.log(res.data.error)
          
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
              value={email}
              onChange={event => setEmail(event.target.value)}
              ></TextInput>
            <Text style={styles.names}>Senha</Text>
              <TextInput 
              secureTextEntry
              placeholder="Senha"
              style={styles.input}
              value={password}
              onChange={event => setPassword(event.target.value)}
              ></TextInput>
            <TouchableOpacity>
            <Text onPress={handleSubmit} style={styles.button}>ENTRAR</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
