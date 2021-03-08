import {StyleSheet} from 'react-native'
import Constants from "expo-constants"

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
  },
   title: {
     fontSize: 48,
     fontWeight: 'bold',
     textAlign: 'center'
   },
   input: {
    marginTop: 15,
    height: 60,
    backgroundColor: 'fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
   }, 
   inputContainer: {
       marginTop: 30,
       width: '90%',
       padding: 20,
       borderTopLeftRadius: 10,
       borderTopRightRadius: 10,
       alignItems: 'stretch',
       backgroundColor: 'gray'
   },
   button: {
    marginTop: 30,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    padding: 16,
    width: '700px'
  }
})