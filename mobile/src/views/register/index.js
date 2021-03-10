import React, {useState, useEffect} from 'react'
import { useNavigation } from "@react-navigation/native"
import { View, Alert, Text, TouchableOpacity, TextInput, Button} from "react-native"

import api from '../../services/api'

import styles from "./styles"

export default function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState(0)
  const [password2, setPassword2] = useState(0)

  const navigation = useNavigation()

  function navigateToLogin() {
    navigation.navigate("Login")
  }

  const handleSubmit = () => {
    const data = {
      name: name,
      email: email,
      password: password,
      password2: password2
    }

    api.post('/users/register', data)
      .then(res => {
        if(res.data.status === 2) {
          alert('' + res.data.error)
        } else {
          alert('' + res.data.success)
          navigateToLogin()
        }
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Cadastrar</Text>
            <Text style={styles.names}>Nome</Text>
              <TextInput 
              style={styles.input}
              placeholder="Nome"
              onChangeText={text => setName(text)}
              ></TextInput>
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
            <Text style={styles.names}>Confirmar senha</Text>
              <TextInput 
              secureTextEntry 
              placeholder="Confirmar senha"
              style={styles.input}
              onChangeText={text => setPassword2(text)}
              ></TextInput>
            <TouchableOpacity>
            <Text onPress={handleSubmit} style={styles.button}>CRIAR CONTA</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
