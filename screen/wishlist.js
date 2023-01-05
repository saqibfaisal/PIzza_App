import { Image, Text, TouchableOpacity, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import database from '@react-native-firebase/database'
import Images from "./assets/pizzaImage.png"
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
function WishList() {
    const [wishlist, setWislist] = useState({})
    let getData = async () => {
            const jsonValue = await AsyncStorage.getItem('wishlist')
            const data = jsonValue !== null ? JSON.parse(jsonValue) : null
            console.log(data.name, "agaya")
                setWislist(data)
            // setDataLoader(true)/
            // database().ref('wishlist').on('value', dt => {
            //   if (dt.exists()) {
            //     let li = Object.values(dt.val())
            //     setWislist([...li])
            //     console.log(wishlist)
            //   }
            // })
          }
    console.log(wishlist.name, "pasand ha")
    useEffect(() => {
        getData()
        // console.log("ajyga ");
    }, [])
    let remove = async()=>{
        // let item = await AsyncStorage.removeItem("wishlist",wishlist,()=>{
        //     console.log("gaya")
        // })
        // console.log(item,"remove");
    }
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
                <TouchableOpacity onPress={()=>{remove()}} style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-end",marginLeft:90}}>
                        <Icon name='favorite' size={25} />
                    </TouchableOpacity>
            </View>
            {/* <Text>Text</Text> */}
        </View>
    )
}
export default WishList