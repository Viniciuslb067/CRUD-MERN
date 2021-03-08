import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const AppStack = createStackNavigator()

import Index from './views/index/index'
import Register from './views/register/index'

export default function routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>

        <AppStack.Screen name="Index" component={Index}/>
        <AppStack.Screen name="Register" component={Register}/>

      </AppStack.Navigator>

    </NavigationContainer>
  )
}