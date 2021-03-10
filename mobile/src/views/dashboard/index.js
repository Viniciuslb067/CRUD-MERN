import React, {useState, useEffect} from 'react'
import { useNavigation } from "@react-navigation/native"
import { View, Text, FlatList, TextInput, Button, SafeAreaView} from "react-native"
import styles from "./styles"

import api from '../../services/api'
import {getNameUser} from '../../services/auth'

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
          {/* <View>
            <Text>Bem vindo, {getNameUser()}</Text>
            {userList.map((value) => {
              return (
                <View style={styles.containerLabel}>
                  <Text style={styles.label}>Nome: {value.name} </Text>
                  <Text style={styles.label}>Nível: {value.level}</Text>
                  <Text style={styles.label}>Email: {value.email}</Text>
                </View>
              )
            })}
          </View> */}
          <SafeAreaView>
          <FlatList
              data={userList}
              style={styles.userList}
              keyExtractor = {userList => String (userList._id)}
              showsVerticalScrollIndicator={false}
              renderItem = {({ item: userList }) => (
                <View style={styles.user}>
                  <Text style={styles.userProperty}>Nome:</Text>
                  <Text style={styles.userValue}>{userList.name}</Text>

                  <Text style={styles.userProperty}>Nível:</Text>
                  <Text style={styles.userValue}>{userList.level}</Text>

                  <Text style={styles.userProperty}>Email:</Text>
                  <Text style={styles.userValue}>{userList.email}</Text>
                </View>
              )}
            >
          </FlatList>
        </SafeAreaView>
      </View>
    </View>
  
  );
}
