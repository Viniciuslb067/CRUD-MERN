import React, {useState, useEffect} from 'react'
import { useNavigation } from "@react-navigation/native"
import { View, FlatList, Text, TouchableOpacity, TextInput, Button} from "react-native"

import api from '../../services/api'

import styles from "./styles"





export default function Index() {

  const navigation = useNavigation()

  function navigationToRegister() {
    navigation.navigate("Register")
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
        <TouchableOpacity>
        <Text style={styles.button}>LOGAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigationToRegister()}
        >
        <Text style={styles.button}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
