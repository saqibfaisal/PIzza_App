import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import database from '@react-native-firebase/database';
import Images from './assets/pizzaImage.png';
import Image2 from './assets/Wishlist.png';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
function WishList({ navigation }) {
  const [wishlist, setWislist] = useState([]);
  let getDatas = async () => {
    let item = await AsyncStorage.getItem('wishlist');
    setWislist(JSON.parse(item));
  };
  useEffect(() => {
    getDatas();
  }, []);
  let addoder = async () => {
    let item = await AsyncStorage.getItem('wishlist');
    let order= JSON.parse(item);
    order.id = database().ref('order/').push().key
        database().ref(`order/${order.id}`).set(order)
            .then(res => {
              console.log(res);
              navigation.navigate('order')
            })
            .catch(err => {
              console.log(err)
            })

  }
  return (
    <View>
      <View
        style={{
          backgroundColor: '#FA4A0C',
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
          Wishlist
        </Text>
        <TouchableOpacity onPress={() =>addoder()} >

          <Text style={{ color: 'white',  fontSize: 18 }}>Checkout</Text>
        </TouchableOpacity>
      </View>

      {wishlist?.length ? (
        <ScrollView style={{ height: '100%' }}>
          {wishlist?.map((data, ind) => (
            <View
              key={ind}
              style={{
                padding: 30,
                paddingBottom: 10,
                display: 'flex',
                flexDirection: 'row',
                shadowColor: '#000',
                paddingHorizontal: 30,
                borderRadius: 20,
                justifyContent: 'space-between',
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                // shadowOpacity: 0.1,
                shadowRadius: 8.3,

                elevation: 2,
                borderRadius: 15,
              }}>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                <View style={{ marginTop: 5 }}>
                  <Image
                    source={Images}
                    style={{ width: 80, height: 80, borderRadius: 30 }}
                  />
                </View>
                <View
                  style={{
                    padding: 20,
                    paddingTop: 10,
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'Actor',
                      paddingBottom: 3,
                      fontWeight: '700',
                    }}>
                    {data.name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: 'Actor',
                      paddingBottom: 3,
                      fontWeight: '700',
                    }}>
                    {data.detail}
                  </Text>
                  <Text>Rs/{data.price}</Text>
                  <View
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      // alignItems: 'flex-end',
                    }}>
                    {/* <TouchableOpacity
                      style={{
                        backgroundColor: '#FA4A0C',
                        color: 'white',
                        padding: 5,
                        marginTop: 10,
                        borderRadius: 15,
                        alignItems: 'center',
                        width: 80,
                        fontSize: 15
                      }} > */}
                      {/* Add */}
                      {/* <Text style={{fontSize: 15}}>add</Text> */}
                    {/* </TouchableOpacity> */}
                  </View>
                </View>
              </View>
              {/* <View>
                <TouchableOpacity
                  onPress={() => {
                    remove();
                  }}
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    marginLeft: 0,
                  }}>
                  <Icon name="favorite" size={20} />
                </TouchableOpacity>
              </View> */}
            </View>
          ))}
        </ScrollView>
      ) : (
        // })
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold' }}>No WishList</Text>
          <Image
            source={Image2}
            style={{ width: '70%', height: '70%', margin: 20, borderRadius: 30 }}
          />
        </View>
      )}
    </View>
  );
}
export default WishList;
