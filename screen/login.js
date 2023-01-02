import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, TextInput, ToastAndroid } from 'react-native';
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database'
import { GlobalStyle } from "../Global";

function Login({ navigation }) {
    let initialData = {
        email: '',
        password: ''
    }
    const [model, setModel] = useState(initialData);
    const [isLoading, setIsLoading] = useState(false)

    let category;
    let loginuser = () => {
        setIsLoading(true)

        auth().signInWithEmailAndPassword(model.email, model.password)
            .then(res => {
                const user = res.user
                database().ref(`appUsers/${user.uid}`).on('value', dt => {
                    setIsLoading(false)
                    let category = dt.val().category
                    // console.log(category, "jsfdsjk");
                    const storeData = async () => {
                        try {
                            const jsonValue = JSON.stringify(dt.val())
                            await AsyncStorage.setItem('LoginKey', jsonValue)
                            // setModel(initialData)
                            setModel("")
                            ToastAndroid.show("Login Successfull", ToastAndroid.SHORT);
                            setIsLoading(false)
                            if (category == "user") {
                                navigation.navigate('HomeScreen')
                                setTimeout(() => {
                                }, 1500)
                                // navigation("")
                            }
                            else {
                                navigation.navigate("Additem")
                            }
                            // navigation.navigate('HomeScreen')
                            // console.log('Data stored', jsonValue)
                        } catch (e) {
                            // saving error
                            setIsLoading(false)
                            ToastAndroid.show("Login falied", ToastAndroid.SHORT);
                            console.log('Data not stored', e)
                        }
                    }
                    storeData()

                })
                setModel("")
            })
            .catch(err => {
                setIsLoading(false)
                setModel(initialData)
                setIsLoading(false)
                console.log(err)
                setModel("")
            })
    }

    return (
        <>
            <View >
                <View style={GlobalStyle.Signup}>
                    <Text style={{ fontSize: 25, marginTop: 100, fontWeight: 'bold' }}>
                        Welcome Back
                    </Text>
                    <Text style={{ fontSize: 20, marginBottom: 40, fontWeight: 'bold' }}>
                        Please Login to your account
                    </Text>
                    <View style={GlobalStyle.SignupView}>
                        <TextInput
                            style={GlobalStyle.SignupInput}
                            value={ model.email }
                            onChangeText={e => setModel({ ...model, email: e })}
                            placeholder="Email*"
                        />
                    </View>
                    <View style={GlobalStyle.SignupView}>
                        <TextInput
                            style={GlobalStyle.SignupInput}
                            value={ model.password }
                            onChangeText={e => setModel({ ...model, password: e })}
                            placeholder="Password*"
                        />
                    </View>
                    <Text
                        style={{
                            alignSelf: 'flex-end',
                            marginRight: 40,
                            marginVertical: 15,
                            color: '#FA4A0C',
                        }}>
                        Forgot Password ?
                    </Text>
                    <TouchableOpacity
                        style={GlobalStyle.Button}
                        onPress={() => loginuser()}>{isLoading ? <ActivityIndicator color='white' /> :
                            <Text style={{ color: 'white', fontSize: 20 }}>Login </Text>}
                    </TouchableOpacity>

                    <View style={{ marginVertical: 10, flexDirection: 'row', marginTop: 20 }}>
                        <Text>Don't Have an Account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={{ color: '#FA4A0C' }}>Create Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
        // <>
        // <View
        // </>
    );
}
export default Login;