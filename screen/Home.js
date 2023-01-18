import { View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from '../style'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import Pizza from "./assets/pizza.jpg";
import { GlobalStyle } from "../Global";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from './assets/pizzaImage.png';
const Home = ({ navigation }) => {

  let [dataLoader, setDataLoader] = useState(false)
  let [list, setList] = useState([])

  let getData = () => {
    setDataLoader(true)
    database().ref('addItem').on('value', dt => {
      setDataLoader(false)
      if (dt.exists()) {
        setDataLoader(false)
        let li = Object.values(dt.val())
        setList([...li])
      }
    })
  }


  useEffect(() => {
    getData()
  }, [])


  let logoutUser = async () => {
    auth()
      .signOut()
      try{
        // const jsonValue = JSON.stringify(data)
        // console.log(data);
        // let awein = await AsyncStorage.removeItem('wishlist')
        // console.log(awein,"hrll");
        ToastAndroid.show("Logout", ToastAndroid.SHORT);
        navigation.navigate('Login')
      }
      catch(err) {
        console.log(err)
      }
  }

  return (
    <>
      <View>
        <View style={{ backgroundColor: "#FA4A0C", paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Home</Text>
          <TouchableOpacity onPress={logoutUser}>
            <Icon name='logout' size={25} color='white' />
          </TouchableOpacity>
        </View>
        {dataLoader ? <View style={{ height: '100%', justifyContent: 'center' }}>
          <ActivityIndicator size={60} color='#FA4A0C' />
        </View>
          :
          <ScrollView style={{ height: '100%'}}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, backgroundColor: "white" }} >
              {list.length > 0 ? list.map((e, i) => (
                <TouchableOpacity onPress={() => navigation.navigate('ItemDetails', e)} style={{
                  width: '50%', paddingHorizontal: 5, marginTop: 30, justifyContent: "center", alignItems: "center", shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 7,
                  },
                  shadowOpacity: 0.41,
                  shadowRadius: 9.11,

                  elevation: 14,
                }} key={i}>
                  <View style={{
                    borderRadius: 10, borderWidth: 2, borderColor: '#FA4A0C', justifyContent: "center", alignItems: "center", paddingLeft: 10, paddingRight: 10, padding: 10
                  }}>
                    <View>
                      <Image source={Images} style={{ width: 100, height: 100, borderRadius: 10 }} />
                    </View>
                    <View style={{ paddingVertical: 10, paddingHorizontal: 5 }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'black',alignItems:"flex-start" }}>{e.name}</Text>

                      <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'grey' }}>{e.price}/- PKR</Text>
                    </View>
                    {/* <View style={{ alignItems: 'center' }}>
                      <Image resizeMode='cover' style={{ height: 150, width: '100%', borderTopRightRadius: 10, borderTopLeftRadius: 10 }} source={{ uri: 'https://www.pizzapoint.com.pk/upload/1666936269-Chicken%20Max.jpeg' }} />
                    </View>
                    <View style={{ paddingVertical: 10 , paddingHorizontal:5 }}>
                      <Text style={{  fontWeight: 'bold', fontSize: 18, color: 'black', }}>{e.name}</Text>

                      <Text style={{  fontWeight: 'bold', fontSize: 14, color: 'grey' }}>{e.price}/- PKR</Text>
                    </View> */}
                  </View>
                </TouchableOpacity>
              ))
                : (
                  <View style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <Text style={{ textAlign: "center", fontSize: 30 }}>No Data</Text>
                    <ActivityIndicator size={60} color='#FA4A0C' />
                  </View>
                )
              }
            </View>
          </ScrollView>
        }
      </View>
    </>
  )
}

export default Home