
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View,
} from 'react-native';
import SMButton from '../component/SMbutton';
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
import database from '@react-native-firebase/database'
function Detail({ navigation, route }) {
    // console.log(route.params);
    let [model, setModel] = useState({})
    let data = route.params;
    let wishlist =()=>{
        model.id = database().ref('wishlist/').push().key
        database().ref(`wishlist/${model.id}`).set(model)
            .then(res => {
                // setIsLoading(false)
                // setModel(initialData)
                ToastAndroid.show('You Add to Wishlist', ToastAndroid.LONG)
            })
            .catch(err => {
                // setIsLoading(false)
                console.log(err)
            })
    }
    return (
        <>
            <View style={{ flex: 1, width: null, height: null }}>
                <TouchableOpacity onPress={()=>{wishlist()}} style={{padding:10}}>

                    <Icon name='favorite' size={25} color={  "black"} />
                </TouchableOpacity>
                <View>
                    <View style={{ padding: 20, marginTop: 50 }}>
                        <Image
                            source={{ uri: 'https://www.pizzapoint.com.pk/upload/1666936269-Chicken%20Max.jpeg' }}
                            style={{
                                width: 260,
                                height: 200,
                                borderRadius: 35,
                                resizeMode: 'cover',
                                marginLeft: 21,
                            }}
                        />
                    </View>
                    <ScrollView style={{ height: '85%' }}>
                        <View
                            style={{
                                backgroundColor: '#FA4A0C',
                                padding: 26,
                                borderRadius: 25,
                                marginBottom: 11,
                            }}>
                            <Text
                                style={{
                                    fontSize: 30,
                                    borderBottomWidth: 2,
                                    borderBottomColor: '#000',
                                    color: "white"
                                }}>
                                {data.name}
                            </Text>
                            <Text style={{ fontSize: 18, color: "white" }}>flavour:{data.detail}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 20, flex: 3, color: "white" }}>Rs:{data.price}</Text>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: 20 }}>
                            <SMButton
                                label={'Place Order'}
                                loader={false}
                                color={'black'}
                                bgcolor={'#FA4A0C'}
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </>
    )
}
export default Detail