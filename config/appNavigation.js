
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
import database from '@react-native-firebase/database'
import WishList from '../screen/wishlist';
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import Detail from '../screen/assets/detail';
// let category;
let obj;
let getCategory
function AppNavigation() {
    // let [login, setLogin] = useState()
    // let getData = async () => {
    //     // try {
    //     const jsonValue = await AsyncStorage.getItem('LoginKey')
    //     const data = jsonValue !== null ? JSON.parse(jsonValue) : null
    //     setLogin(data.category)
    //     // console.log(data, "hello");
    //     // obj = data
    // }
    // console.log(login, "type");
    // // console.log(obj,"type");
    // // console.log(data.category);
    // useEffect(() => {
    //     getData()
    // }, [])
    return (

        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}

const Stack = createNativeStackNavigator()
const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        {/* <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Signup' component={SignUp} options={{ headerShown: false }} /> */}
        <Stack.Screen name='ItemDetails' component={Detail} />
        <Stack.Screen name='HomeScreen' component={TabNavigator} options={{ headerShown: false }} />
        {/* <Stack.Screen name='Admin' component={Admin} options={{ headerShown: false }} /> */}
        <Stack.Screen name='Additem' component={TabNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
)

const Tab = createBottomTabNavigator();
// const TabNavigator = () => {
function TabNavigator() {
    let [login, setLogin] = useState()
    let getData = async () => {
        // try {
        const jsonValue = await AsyncStorage.getItem('LoginKey')
        const data = jsonValue !== null ? JSON.parse(jsonValue) : null
        setLogin(data.category)
        // console.log(data, "hello");
        // obj = data
    }
    let type = login == "user";
    console.log(type);
    // console.log(login, "type");
    // console.log(obj,"type");
    // console.log(data.category);
    useEffect(() => {
        getData()
    }, [])
    return (


        < Tab.Navigator
            screenOptions={{ tabBarShowLabel: false, headerShown: false, tabBarActiveBackgroundColor: '#FA4A0C' }
            }
        >
            {type ?
                <>
                    <Tab.Screen name="Home"
                        component={Home}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <>
                                    <Icon name='home' size={25} color= {focused ? "white":"black"} />
                                </>
                            )
                        }} />
                    <Tab.Screen name="WishList"
                        component={WishList}
                        options={{
                            tabBarIcon: ({ focused }) => (
                                <>
                                    <Icon name='favorite' size={25} color= {focused ? "white":"black"} />
                                </>
                            )
                        }} />
                </>
                :
                <Tab.Screen name="Add"
                    component={AddItem}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <>
                                <Image style={{ width: 22, height: 22, tintColor: focused ? 'white' : 'black' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1237/1237946.png' }} />
                            </>
                        )
                    }} />
            }

        </Tab.Navigator >


    )
}

export default AppNavigation