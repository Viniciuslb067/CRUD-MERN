import {StyleSheet} from 'react-native'
import Constants from "expo-constants"

export default StyleSheet.create({
  container: {
    fontFamily: 'ubuntu',
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
   title: {
     marginBottom: 30,
     fontSize: 48,
     fontWeight: 'bold',
     textAlign: 'center'
   },
   input: {
    marginTop: 15,
    height: 60,
    backgroundColor: '#edeef7',
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
   }, 
   inputContainer: {
       marginTop: 30,
       width: '90%',
       padding: 20,
       alignItems: 'stretch',
       backgroundColor: 'white'
   },
   button: {
    marginTop: 30,
    textAlign: 'center',
    backgroundColor: 'black',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
    padding: 20,
    width: 290
  },
  names: {
    marginTop: 8,
    fontSize: 15,
    color: 'black',
    
  }
})