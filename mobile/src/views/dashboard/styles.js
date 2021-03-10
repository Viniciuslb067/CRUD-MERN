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
   },

   userList: {
     marginTop: 15
   },

   user: {
     padding: 24,
     borderRadius: 8, 
     backgroundColor: '#edeef7',
     marginBottom: 16,
   },

   userProperty: {
     fontSize: 14,
     color: '#41414d',
     fontWeight: 'bold'
   },

   userValue: {
     marginTop: 8,
     fontSize: 15,
     marginBottom: 24,
     color: "#737380"
   }

})