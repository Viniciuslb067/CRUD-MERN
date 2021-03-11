import React, {useState, useEffect} from 'react'
import { useNavigation } from "@react-navigation/native"
import { View, Text, FlatList, SafeAreaView, TouchableOpacity} from "react-native"
import styles from "./styles"

import api from '../../services/api'

export default function Dashboard() {

  const[userList, setUserList] = useState([])

  const navigation = useNavigation()

  function navigateToLogin() {
    navigation.navigate("Index")
  }

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
          <Text style={styles.welcome}>Bem vindo!</Text>
          <TouchableOpacity>
            <Text onPress={navigateToLogin} style={styles.button}>Logout</Text>
               </TouchableOpacity>
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
