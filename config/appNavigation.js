
import SignUp from '../screen/signUp';
import { NavigationContainer } from '@react-navigation/native';
import { Image, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import Login from '../screen/login';
import AddItem from '../screen/additem';
import Home from '../screen/Home';
import Admin from '../screen/admin';


// let category;
let obj;
let getCategory
function AppNavigation() {

    let getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('LoginKey')
            const data = jsonValue !== null ? JSON.parse(jsonValue) : null
            if (data) {
                obj = jsonValue
                console.log('Data Receive', obj)
            }
        } catch (e) {
            console.log(e)
        }
    }
    getData()

    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator()
const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
        {/* <Stack.Screen  name='Additem' component={AddItem} options={{headerShown:false}}/> */}
        {/* <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Signup' component={SignUp} options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name='Item Details' component={ItemDetails} /> */}
        <Stack.Screen name='HomeScreen' component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='Admin' component={Admin} options={{ headerShown: false }} />
    </Stack.Navigator>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator
        screenOptions={{ tabBarShowLabel: false, headerShown: false, tabBarActiveBackgroundColor: '#07ABF1' }}
    >
        <Tab.Screen name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ focused }) => (
                    <>
                        <Image style={{ width: 22, height: 22, tintColor: focused ? 'white' : 'black' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' }} />
                        <Text style={{ marginTop: 1, fontSize: 12, color: focused ? 'white' : 'black' }}>HOME</Text>
                    </>
                )
            }} />
        {/* <Tab.Screen name="Orders"
            component={Orders}
            options={{
                tabBarBadge: 1,
                tabBarIcon: ({ focused }) => (
                    <>
                        <Image style={{ width: 22, height: 22, tintColor: focused ? 'white' : 'black' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/7322/7322265.png' }} />
                        <Text style={{ marginTop: 1, fontSize: 12, color: focused ? 'white' : 'black' }}>ORDERS</Text>
                    </>
                )
            }} /> */}


        <Tab.Screen name="Add"
            component={AddItem}
            options={{
                tabBarIcon: ({ focused }) => (
                    <>
                        <Image style={{ width: 22, height: 22, tintColor: focused ? 'white' : 'black' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1237/1237946.png' }} />
                        <Text style={{ marginTop: 1, fontSize: 12, color: focused ? 'white' : 'black' }}>ADD</Text>
                    </>
                )
            }} />

    </Tab.Navigator>
)

export default AppNavigation