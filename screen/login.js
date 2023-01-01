import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, TextInput } from 'react-native';
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
                    let category = dt.val().category
                        console.log(category,"jsfdsjk");
                    const storeData = async () => {
                        try {
                            const jsonValue = JSON.stringify(dt.val())
                            await AsyncStorage.setItem('LoginKey', jsonValue)
                            setModel(initialData)
                            setIsLoading(false)
                            if (category == "user") {
                                navigation.navigate('HomeScreen')
                                // navigation("")
                            }
                            else {
                                navigation.navigate("Admin")
                            }
                            // navigation.navigate('HomeScreen')
                            // console.log('Data stored', jsonValue)
                        } catch (e) {
                            // saving error
                            console.log('Data not stored', e)
                        }
                    }
                    storeData()

                })
            })
            .catch(err => {
                setModel(initialData)
                setIsLoading(false)
                console.log(err)
            })
    }

    return (
        <>
            <View>
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
                            onChangeText={e => setModel({ ...model, email: e })}
                            placeholder="Email*"
                        />
                    </View>
                    <View style={GlobalStyle.SignupView}>
                        <TextInput
                            style={GlobalStyle.SignupInput}
                            onChangeText={e => setModel({ ...model, password: e })}
                            placeholder="Password*"
                        />
                    </View>
                    <Text
                        style={{
                            alignSelf: 'flex-end',
                            marginRight: 40,
                            marginVertical: 15,
                            color: '#07ABF1',
                        }}>
                        Forgot Password ?
                    </Text>
                    <TouchableOpacity
                        style={GlobalStyle.Button}
                        onPress={() => loginuser()}>
                        <Text style={{ color: 'white', fontSize: 20 }}>Login </Text>
                    </TouchableOpacity>

                    <View style={{ marginVertical: 10, flexDirection: 'row', marginTop: 20 }}>
                        <Text>Don't Have an Account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                            <Text style={{ color: '#07ABF1' }}>Create Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
}
export default Login;