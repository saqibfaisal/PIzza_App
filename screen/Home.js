import { View, Text, Image, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from '../style'
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

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


  let logoutUser = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User signed out!')
        navigation.navigate('Login')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <View>
        <View style={[style.bgDark, { paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }]}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Home</Text>
          <TouchableOpacity onPress={logoutUser}>
            <Icon name='logout' size={25} color='white' />
          </TouchableOpacity>
        </View>
        {dataLoader ? <View style={{ height: '100%', justifyContent: 'center' }}>
          <ActivityIndicator size={60} color='red' />
        </View>
          :
          <ScrollView>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10 }} >
              {list.length > 0 ? list.map((e, i) => (
                <TouchableOpacity onPress={() => navigation.navigate('Item Details', e)} style={{ width: '50%', paddingHorizontal: 10, marginTop: 20 }} key={i}>
                  <View style={{ borderRadius: 10, borderWidth: 2, borderColor: '#DC3535', backgroundColor: 'white' }}>
                    <View style={{ alignItems: 'center' }}>
                      <Image resizeMode='stretch' style={{ height: 150, width: '100%', borderTopRightRadius: 10, borderTopLeftRadius: 10 }} source={{ uri: 'https://www.pizzapoint.com.pk/upload/1666936269-Chicken%20Max.jpeg' }} />
                    </View>
                    <View style={{ paddingVertical: 10 }}>
                      <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 18, color: 'black' }}>{e.name}</Text>
                      <Text style={{ marginLeft: 20, fontWeight: 'bold', fontSize: 14, color: 'grey' }}>{e.price}/- PKR</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
                : (
                  <View>
                    {/* <View style={{ borderWidth: 1, height: '100%' }}> */}
                    <Text>No Data</Text>
                    {/* </View> */}
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