
// import { Swipeable } from "react-native-gesture-handler"
import Able from "../component/able"
import Swipeable from "../component/swipeable"
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, FlatList, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database'
function Order({navigation, route}) {
    // let data = route.params;
    // console.log(data);
    // const [pizzas, setPizzas] = useState([]);
    // const [pizzaSize, setPizzaSize] = useState('');
    // const [toppings, setToppings] = useState('');
    // const [quantity, setQuantity] = useState('');
    // const handleAddToCart = () => {
    //     if (!pizzaSize || !toppings || !quantity) {
    //         Alert.alert('Please fill in all the fields');
    //         return;
    //     }

    //     const newPizza = { pizzaSize, toppings, quantity };
    //     setPizzas([...pizzas, newPizza]);
    //     setPizzaSize('');
    //     setToppings('');
    //     setQuantity('');
    // };

    // const handleCheckout = () => {
    //     if (!pizzas.length) {
    //         Alert.alert('Please add at least one pizza to the cart');
    //         return;
    //     }

    //     // Send pizzas to API for checkout
    //     // ...

    //     Alert.alert(
    //         'Order placed',
    //         `Thank you for your order of ${pizzas.length} pizzas!`
    //     );
    //     setPizzas([]);
    // };
    return (
           <View style={{justifyContent:"center",alignItems:"center",marginTop:30}}>
            <Text style={{fontFamily:"Actor",fontWeight:"bold",fontSize:20}}>Order Conform</Text>
           </View> 

        // <View style={styles.container}>
        //     <View style={styles.formContainer}>
        //         <Text style={styles.label}>Pizza size:</Text>
        //         <TextInput
        //             style={styles.input}
        //             value={pizzaSize}
        //             onChangeText={setPizzaSize}
        //         />

        //         <Text style={styles.label}>Toppings:</Text>
        //         <TextInput
        //             style={styles.input}
        //             value={toppings}
        //             onChangeText={setToppings}
        //         />

        //         <Text style={styles.label}>Quantity:</Text>
        //         <TextInput
        //             style={styles.input}
        //             value={quantity}
        //             onChangeText={setQuantity}
        //         />

        //         <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        //             <Text style={styles.buttonText}>Add to cart</Text>
        //         </TouchableOpacity>
        //     </View>

        //     <FlatList
        //         style={styles.list}
        //         data={pizzas}
        //         keyExtractor={(item, index) => index.toString()}
        //         renderItem={({ item }) => (
        //             <View style={styles.listItem}>
        //                 <Text style={styles.listText}>Pizza size: {item.pizzaSize}</Text>
        //                 <Text style={styles.listText}>Toppings: {item.toppings}</Text>
        //                 <Text style={styles.listText}>Quantity: {item.quantity}</Text>
        //             </View>
        //         )}
        //     />

        //     <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        //         <Text style={styles.checkoutText}>Checkout</Text>
        //     </TouchableOpacity>
        // </View>

    )
}
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#F5F5F5',
//     },
//     formContainer: {
//         marginBottom: 20,
//     },
//     label: {
//         fontWeight: 'bold',
//         marginBottom: 5,
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#DDD',
//         padding: 10,
//         marginBottom: 20,
//         borderRadius: 4,
//     },
//     button: {
//         backgroundColor: '#4CAF50',
//         padding: 12,
//         alignItems: 'center',
//         borderRadius: 4,
//     },
//     buttonText: {
//         color: '#FFF',
//         fontWeight: 'bold',
//     },
//     list: {
//         marginBottom: 20,
//     },
//     listItem: {
//         padding: 10,
//         borderWidth: 1,
//         borderColor: '#DDD',
//         marginBottom: 10,
//     },
//     listText: {
//         fontSize: 16,
//     },
//     checkoutButton: {
//         backgroundColor: '#4CAF50',
//         padding: 12,
//         alignItems: 'center',
//         borderRadius: 4,
//     },
//     checkoutText: {
//         color: '#FFF',
//         fontWeight: 'bold',
//     },
// });
export default Order