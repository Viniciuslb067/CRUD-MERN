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
     fontSize: 50,
     fontWeight: 'bold'
   },
   containerLabel: {
    backgroundColor: '#edeef7'


   },
   label: {
     marginRight: 150,
     padding: 8,
   }
})