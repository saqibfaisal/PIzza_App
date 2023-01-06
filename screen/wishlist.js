import { Image, Text, TouchableOpacity, View } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import database from '@react-native-firebase/database'
import Images from "./assets/pizzaImage.png"
import Image2 from "./assets/Wishlist.png"
import Icon from 'react-native-vector-icons/dist/MaterialIcons'
function WishList() {
    const [wishlist, setWislist] = useState()
    let getData = async () => {
        AsyncStorage.getItem('wishlist').then((res) => {
            // let con = res.concat(wishlist)
            // let josn = JSON.parse(con)
            // console.log(josn, "contact");
            // // console.log(res,"hello");
            // setWislist(josn)
            // console.log(wishlist, "pasand ha")
            console.log(res,"hello");
        })
        // const jsonValue = await AsyncStorage.getItem('wishlist')
        // console.log(jsonValue,"jsj")
        // const data = jsonValue !== null ? jsonValue : null
        // console.log(data.name, "agaya")
        // database().ref('wishlist').on('value', dt => {
        //   if (dt.exists()) {
        //     let li = Object.values(dt.val())
        //     setWislist([...li])
        //     console.log(wishlist)
        //   }
        // })
    }
    useEffect(() => {
        getData()
        // console.log("ajyga ");
    }, [])
    let remove = async () => {
        // let item = await AsyncStorage.removeItem("wishlist",wishlist,()=>{
        //     console.log("gaya")
        // })
        // console.log(item,"remove");
    }
    return (
        <View>
            <View style={{ backgroundColor: "#FA4A0C", paddingHorizontal: 20, paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Wishlist</Text>
                {/* <TouchableOpacity >
                    <Icon name='logout' size={25} color='white' />
                </TouchableOpacity> */}
            </View>
            {!wishlist ?
                <View>
                    <View style={{
                        padding: 30, display: "flex", flexDirection: "row", shadowColor: "#000", paddingHorizontal: 30, justifyContent: "space-between",
                        shadowOffset: {
                            width: 0,
                            height: 6,
                        },
                        shadowOpacity: 0.39,
                        shadowRadius: 8.30,

                        elevation: 13,
                        borderRadius: 15
                    }}>
                        <View style={{ display: "flex", flexDirection: "row" }}>

                            <View>
                                <Image source={Images} style={{ width: 80, height: 80, borderRadius: 30 }} />
                            </View>
                            {/* <View style={{ padding: 20, justifyContent: "center" }}>
                                <Text style={{ fontSize: 20, fontFamily: "Actor", paddingBottom: 3, fontWeight: "700" }}>{wishlist.name}</Text>
                                <Text style={{ fontSize: 20, fontFamily: "Actor", paddingBottom: 3, fontWeight: "700" }}>{wishlist.detail}</Text>
                                <Text>Rs/{wishlist.price}</Text>
                            </View> */}
                        </View>
                        <View>

                            <TouchableOpacity onPress={() => { remove() }} style={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-end", marginLeft: 0 }}>
                                <Icon name='favorite' size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                :
                <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: 40 }}>
                    <Text style={{ fontSize: 28, fontWeight: "bold" }}>No WishList</Text>
                    <Image source={Image2} style={{ width: "70%", height: "70%", margin: 20, borderRadius: 30 }} />
                </View>
            }

        </View>
    )
}
export default WishList