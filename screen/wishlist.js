import {Image, Text, TouchableOpacity, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import database from '@react-native-firebase/database';
import Images from './assets/pizzaImage.png';
import Image2 from './assets/Wishlist.png';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
function WishList() {
  const [wishlist, setWislist] = useState([]);
  console.log('phele', wishlist);
  let getData = async () => {
    let item = await AsyncStorage.getItem('wishlist');
    if (item == !null) {
      setWislist(item);
      wishlist.map(e => console.log(e));
    } else {
      console.log('hello world');
    }
  };
  useEffect(() => {
    getData();
  }, [wishlist]);
  console.log('bad', wishlist);
  let remove = async () => {
    await AsyncStorage.removeItem('wishlist');
  };
  return (
    <View>
      {/* {wishlist?.length== undefined ?  null:wishlist?.map((e, i) => console.log(e)) } */}
      {/* {
        wishlist !== undefined && wishlist !== [] ? wishlist?.map((data,ind)=>{
            console.log(data)
        }):<Text>Loading...</Text>
      } */}
      <View
        style={{
          backgroundColor: '#FA4A0C',
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>
          Wishlist
        </Text>
        {/* <TouchableOpacity >
                    <Icon name='logout' size={25} color='white' />
                </TouchableOpacity> */}
      </View>
      {wishlist !== undefined && wishlist !== [] ? (
        wishlist?.map((data, ind) => {
          <View>
            <View
              style={{
                padding: 30,
                display: 'flex',
                flexDirection: 'row',
                shadowColor: '#000',
                paddingHorizontal: 30,
                justifyContent: 'space-between',
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.3,

                elevation: 13,
                borderRadius: 15,
              }}>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <View>
                  <Image
                    source={Images}
                    style={{width: 80, height: 80, borderRadius: 30}}
                  />
                </View>
                <View style={{padding: 20, justifyContent: 'center'}}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: 'Actor',
                      paddingBottom: 3,
                      fontWeight: '700',
                    }}>
                    {data.name}
                  </Text>
                  {/* <Text style={{ fontSize: 20, fontFamily: "Actor", paddingBottom: 3, fontWeight: "700" }}>{e.detail}</Text>
                                <Text>Rs/{e.price}</Text> */}
                </View>
              </View>
              <View>
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
              </View>
            </View>
          </View>;
        })
      ) : (
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <Text style={{fontSize: 28, fontWeight: 'bold'}}>No WishList</Text>
          <Image
            source={Image2}
            style={{width: '70%', height: '70%', margin: 20, borderRadius: 30}}
          />
        </View>
      )}
    </View>
  );
}
export default WishList;
