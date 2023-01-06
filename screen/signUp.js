import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, TextInput, ToastAndroid } from 'react-native';
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database'

import { GlobalStyle } from "../Global";

function Login({ navigation }) {
    let initialData = {
        email: '',
        password: '',
        category: 'user'
    }
    const [model, setModel] = useState(initialData)
    const [isLoading, setIsLoading] = useState(false)


    let signupuser = () => {
        setIsLoading(true)
        auth().createUserWithEmailAndPassword(model.email, model.password, model.category)
            .then(res => {
                setIsLoading(false)
                model.id = res.user.uid;
                database().ref(`appUsers/${model.id}`).set(model)
                ToastAndroid.show("Create Account Successfull", ToastAndroid.SHORT);
                setModel(initialData)
                // console.log('res', res)
            })
            .catch(err => {
                setModel(initialData)
                setIsLoading(false)
                ToastAndroid.show("falied", ToastAndroid.SHORT);
                console.log(err)
            })
        setModel("")
    }

    return (
        <>
            <View>
                <View style={GlobalStyle.Signup}>
                    <Text style={{ fontSize: 25, marginTop: 100, fontWeight: 'bold' }}>
                        Welcome
                    </Text>
                    <Text style={{ fontSize: 20, marginBottom: 40, fontWeight: 'bold' }}>
                        Create an account
                    </Text>
                    <View style={GlobalStyle.SignupView}>
                        <TextInput
                            style={GlobalStyle.SignupInput}
                            value={model.userName}
                            onChangeText={e => setModel({ ...model, userName: e })}
                            placeholder="UserName*"
                        />
                    </View>
                    <View style={GlobalStyle.SignupView}>
                        <TextInput
                            style={GlobalStyle.SignupInput}
                            value={model.email}
                            onChangeText={e => setModel({ ...model, email: e })}
                            placeholder="Email*"
                        />
                    </View>
                    <View style={GlobalStyle.SignupView}>
                        <TextInput
                            style={GlobalStyle.SignupInput}
                            value={model.password}
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
                        onPress={() => signupuser()}>
                        {isLoading ? <ActivityIndicator color="white" /> :
                            <Text style={{ color: 'white', fontSize: 17 }}>Signup </Text>}
                    </TouchableOpacity>

                    <View style={{ marginVertical: 10, flexDirection: 'row', marginTop: 20 }}>
                        <Text>You have Already account </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={{ color: '#FA4A0C' }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    );
}
export default Login;