import React, {useState, useEffect} from 'react'
import { useNavigation } from "@react-navigation/native"
import { View, FlatList, Text, TouchableOpacity, TextInput, Button} from "react-native"

import api from '../../services/api'

import styles from "./styles"

export default function Dashboard() {

  const[userList, setUserList] = useState([])
  
   async function loadUsers() {

    const response = await api.get('/dashboard')

     setUserList(response.data)
     console.log(userList._id)
   }

   useEffect(() => {
     loadUsers()
   }, [])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View>
            {userList.map((value) => {
              return (
                <View>
                <Text>Nome: {value.name} </Text>
                <Text>Email: {value.email}</Text>
                <Text>Nível: {value.level}</Text>
                </View>
              )
            })}
          </View>
      </View>
    </View>
  );
}
