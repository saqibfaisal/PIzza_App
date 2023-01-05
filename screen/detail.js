
import React, { useEffect, useState } from 'react';
import {
    Image,
    ScrollView,
    Text,
    ToastAndroid,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon, { Button } from 'react-native-vector-icons/dist/MaterialIcons'
import Images from "./assets/pizzaImage.png"
import database from '@react-native-firebase/database'
import AsyncStorage from '@react-native-async-storage/async-storage';
function Detail({ navigation, route }) {
    // console.log(route.params);
    let data = route.params;
    let [model, setModel] = useState(data)
    let wishlist = async () => {
        // console.log(data);
        const jsonValue = JSON.stringify(data)
        let awein = await AsyncStorage.setItem('wishlist', jsonValue)
        console.log(awein, "jejj");
        // model.id = database().ref('wishlist/').push().key
        // database().ref(`wishlist/${model.id}`).set(model)
        //     .then(res => {
        //         // setIsLoading(false)
        //         // setModel(initialData)
        //         ToastAndroid.show('You Add to Wishlist', ToastAndroid.LONG)
        //     })
        //     .catch(err => {
        //         // setIsLoading(false)
        //         console.log(err)
        //     })
    }
    // let cart =()=>{
        
    // }

    return (
        <View>
            <ScrollView>
                <View style={{ display: "flex", flexDirection: "row", margin: 15, justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }} >
                        <Icon name="chevron-left" size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { wishlist() }}>
                        <Icon name='favorite' size={30} />
                    </TouchableOpacity>
                </View>
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ width: 250, height: 250, marginTop: 20, marginBottom: 20 }}>

                        <Image source={Images} style={{ width: "100%", height: "100%", borderRadius: 30 }} />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 28, fontWeight: "400", fontFamily: "Actor", color: "#000", textAlign: "center", lineHeight: 34, fontStyle: "normal" }}>
                            {data.name}
                        </Text>
                        {/* <Text style={{ fontSize: 14, fontWeight: "400", fontFamily: "Actor", color: "#000", textAlign: "center", lineHeight: 34, fontStyle: "normal" }}>
                        {data.detail}
                    </Text> */}

                        <Text style={{ fontSize: 22, marginTop: 10, textAlign: "center", color: "#FA4A0C", lineHeight: 26, fontWeight: "400", fontFamily: "Actor", fontStyle: "normal" }}>
                            Rs/ {data.price}
                        </Text>
                    </View>
                </View>
                <View style={{ marginTop: 40, marginLeft: 53, marginRight: 64 }}>
                    <Text style={{ color: "#000000", fontFamily: "Actor", fontStyle: "normal", fontWeight: "400", fontSize: 17, lineHeight: 20, marginBottom: 8 }}>Detail</Text>
                    <Text style={{ color: "#000000", fontFamily: "Actor", opacity: 0.5, fontSize: 14, fontWeight: "400", fontStyle: 'normal' }}>{data.detail}</Text>
                </View>
                <View style={{ marginTop: 40, marginLeft: 53, marginRight: 64 }}>
                    <Text style={{ color: "#000000", fontFamily: "Actor", fontStyle: "normal", fontWeight: "400", fontSize: 17, lineHeight: 20, marginBottom: 8 }}>Return policy</Text>
                    <Text style={{ color: "#000000", fontFamily: "Actor", opacity: 0.5, fontSize: 14, fontWeight: "400", fontStyle: 'normal' }}>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</Text>
                </View>
                <TouchableOpacity style={{ margin: 50, marginTop: 40, alignItems: "center" }} onPress={() => { wishlist() }}>
                    <Text style={{ padding: 20, paddingLeft: 50, paddingRight: 50, backgroundColor: "#FA4A0C", color: "white", borderRadius: 30 }}>Add to Cart</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}
export default Detail