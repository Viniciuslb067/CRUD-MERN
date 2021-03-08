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
        <Text style={styles.title}>Cadastrar</Text>
        <TextInput placeholder="NOME"
        style={styles.input}
        ></TextInput>
        <TextInput placeholder="EMAIL"
        style={styles.input}
        ></TextInput>
        <TextInput placeholder="SENHA"
        style={styles.input}
        ></TextInput>
        <TextInput placeholder="CONFIRMAR SENHA"
        style={styles.input}
        ></TextInput>
        <TouchableOpacity>
        <Text style={styles.button}>CRIAR CONTA</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
