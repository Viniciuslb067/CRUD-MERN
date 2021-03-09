import React, {useState, useEffect} from 'react'
import { useNavigation } from "@react-navigation/native"
import { View, FlatList, Text, TouchableOpacity, TextInput, Button} from "react-native"

import api from '../../services/api'

import styles from "./styles"

export default function Register() {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={styles.inputContainer}>
            <Text style={styles.title}>Login</Text>
            <Text style={styles.names}>Email</Text>
              <TextInput 
              placeholder="Email"
              style={styles.input}
              ></TextInput>
            <Text style={styles.names}>Senha</Text>
              <TextInput 
              secureTextEntry
              placeholder="Senha"
              style={styles.input}
              ></TextInput>
            <TouchableOpacity>
            <Text style={styles.button}>ENTRAR</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
