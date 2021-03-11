import {StyleSheet} from 'react-native'
import Constants from "expo-constants"

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  welcome: {
    fontSize: 17,
    marginBottom: 8,
  },
   title: {
     marginBottom: 30,
     fontSize: 50,
     fontWeight: 'bold'
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

   userValue: {
     marginTop: 8,
     fontSize: 15,
     marginBottom: 24,
     color: "#737380"
   }

})