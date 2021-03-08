import {StyleSheet} from 'react-native'
import Constants from "expo-constants"

export default StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#D0CDD7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
  },
   title: {
     fontSize: 32,
     fontWeight: 'bold'
   },
   button:{
     marginTop: 20,
     textAlign: 'center',
     backgroundColor: 'black',
     color: 'white',
     padding: 16,
     width: 290
   }
})