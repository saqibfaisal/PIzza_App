import { Image, Text, TouchableOpacity, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import Images from "./assets/pizzaImage.png"
function WishList() {
    const [wishlist, setWislist] = useState()
    let aja = async () => {
        const jsonValue = await AsyncStorage.getItem('wishlist')
        const data = jsonValue !== null ? JSON.parse(jsonValue) : null
        console.log(data.name, "agaya")
        setWislist(data)
    }
    console.log(wishlist, "pasand ha")
    useEffect(() => {
        aja()
        // console.log("ajyga ");
    }, [])
    return (
        <View>
            <View style={{ backgroundColor: "#FA4A0C", paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Cart</Text>
                {/* <TouchableOpacity >
                    <Icon name='logout' size={25} color='white' />
                </TouchableOpacity> */}
            </View>
            <View style={{
                padding: 30, display: "flex", flexDirection: "row", shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.39,
                shadowRadius: 8.30,

                elevation: 13,
                borderRadius:15
            }}>
                <View>
                    <Image source={Images} style={{ width: 80, height: 80 ,borderRadius:30}} />
                </View>
                <View style={{padding:20,justifyContent:"center"}}>
                    <Text style={{fontSize:20,fontFamily:"Actor",paddingBottom:3,fontWeight:"700"}}>{wishlist.name}</Text>
                    <Text>Rs/{wishlist.price}</Text>
                </View>
            </View>
            {/* <Text>Text</Text> */}
        </View>
    )
}
export default WishList