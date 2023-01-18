import SignUp from '../screen/signUp';
import {NavigationContainer} from '@react-navigation/native';
import {Image, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import Login from '../screen/login';
import AddItem from '../screen/additem';
import Home from '../screen/Home';
import Admin from '../screen/admin';
import database from '@react-native-firebase/database';
import WishList from '../screen/wishlist';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Detail from '../screen/detail';
import Order from '../screen/order';
function AppNavigation() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  let [key, setKey] = useState();
  let getData = async () => {
    // try {
    const jsonValue = await AsyncStorage.getItem('LoginKey');
    const data = jsonValue !== null ? JSON.parse(jsonValue) : null;
    // setKey(data.id);
    // console.log(data.id);
  };
  // let type = login == "user";
  // console.log(type);
  useEffect(() => {
    getData();
  }, []);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ItemDetails"
        component={Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Additem"
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="order"
        component={Order}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
function TabNavigator() {
  let [login, setLogin] = useState();
  let [cart, setCart] = useState();
  let getData = async () => {
    // try {
    const jsonValue = await AsyncStorage.getItem('LoginKey');
    const data = jsonValue !== null ? JSON.parse(jsonValue) : null;
    setLogin(data.category);
  };
  let type = login == 'user';
  // console.log(type);
  let cartNumber = async () => {
    let item = await AsyncStorage.getItem('wishlist');
    const data = item !== null ? JSON.parse(item) : null;
    // console.log(data.length, 'hello');
    setCart(data ? data.length : 0);
  };
  useEffect(() => {
    getData();
    cartNumber();
  }, [cart]);
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
      {type ? (
        <>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  <Icon
                    name={focused ? 'restaurant-menu' : 'restaurant'}
                    size={25}
                    color={focused ? '#FA4A0C' : 'black'}
                  />
                </>
              ),
            }}
          />
          <Tab.Screen
            name="WishList"
            component={WishList}
            options={{
              tabBarBadge: cart ,
              tabBarIcon: ({focused}) => (
                <>
                  <Icon
                    name={focused ? 'add-shopping-cart' : 'shopping-cart'}
                    // name="favorite"
                    size={25}
                    color={focused ? '#FA4A0C' : 'black'}
                  />
                </>
              ),
            }}
          />
          {/* <Tab.Screen
            name="order"
            component={Order}
            options={{
              tabBarIcon: ({focused}) => (
                <>
                  <Image
                    style={{
                      width: 22,
                      height: 22,
                      tintColor: focused ? '#FA4A0C' : 'black',
                    }}
                    source={{
                      uri: 'https://m.media-amazon.com/images/I/418wK+6vaQL.png',
                    }}
                  />
                </>
              ),
            }}
          /> */}
        </>
      ) : (
        <Tab.Screen
          name="Add"
          component={AddItem}
          options={{
            tabBarIcon: ({focused}) => (
              <>
                <Image
                  style={{
                    width: 22,
                    height: 22,
                    tintColor: focused ? '#FA4A0C' : 'black',
                  }}
                  source={{
                    uri: 'https://cdn-icons-png.flaticon.com/128/1237/1237946.png',
                  }}
                />
              </>
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
}

export default AppNavigation;
