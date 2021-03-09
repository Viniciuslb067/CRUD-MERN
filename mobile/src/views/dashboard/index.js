import React, {useState, useEffect} from 'react'
import { useNavigation } from "@react-navigation/native"
import { View, Text, SafeAreaView, TextInput, Button} from "react-native"

import api from '../../services/api'

import styles from "./styles"

export default function Dashboard() {

  const[userList, setUserList] = useState([])
  
   async function loadUsers() {

    const response = await api.get('/dashboard')

     setUserList(response.data)
   }

   useEffect(() => {
     loadUsers()
   }, [])

  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
          <View>
            {userList.map((value) => {
              return (
                <View style={styles.containerLabel}>
                  <Text style={styles.label}>Nome: {value.name} </Text>
                  <Text style={styles.label}>Nível: {value.level}</Text>
                  <Text style={styles.label}>Email: {value.email}</Text>
                </View>
              )
            })}
          </View>
      </View>
    </View>
    </SafeAreaView>
  );
}
