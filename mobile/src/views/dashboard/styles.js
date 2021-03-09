import {StyleSheet} from 'react-native'
import Constants from "expo-constants"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    justifyContent: "space-between",
    alignItems: "center",
  },
   title: {
     marginBottom: 30,
     fontSize: 48,
     fontWeight: 'bold'
   },
   button:{
     marginTop: 20,
     textAlign: 'center',
     backgroundColor: 'black',
     fontSize: 14,
     fontWeight: 'bold',
     color: 'white',
     padding: 16,
     width: 290
   },
   containerLabel: {
    backgroundColor: 'gray'


   },
   label: {
     marginBottom: -10,
     marginRight: 150,
     padding: 10,
   }
})