import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { View, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native';
import Text from "../../components/text/text";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { showMessage } from "react-native-flash-message";


export default function SignUp({ navigation }) {
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const createAccount = () => {
        const auth = getAuth()
        createUserWithEmailAndPassword(auth, email, password, name, age)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                setMsg(error.message);
                showMessage({
                    message: msg,
                    type: "danger",
                  });
            });
    }

    return (
        <View>
            <Image
                style={{ height: 250, width: '80%', marginTop: 40, alignSelf: 'center' }}
                source={require('../../../assets/create.jpg')}
                resizeMood='cover'
            />
            <Input
                placeholder='Email'
                onChangeText={(text) => setEmail(text)}
            />
            <Input
                placeholder='Password'
                onChangeText={(text) => setPassword(text)}
                secureTextEntry 
            />
            <Input
                placeholder='Full Name'
                onChangeText={(text) => setName(text)}
                require
            />
            <Input
                placeholder='Age'
                onChangeText={(text) => setAge(text)}
            />


            <View style={styles.directSignIn}>
                <Button
                    title={'Register'}
                    customStyles={{ alignSelf: 'center', marginTop: 15 }}
                    onPress={createAccount}
                />
                <Pressable onPress={() => { navigation.navigate('Login') }} >
                    <Text style={styles.signInText}>Already have an account <Text style={{ color: "green" }}>Login</Text> </Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    directSignIn: {
        flex: 1,
        marginBottom: 10,
        alignItems: 'center'
    },
    signInText: {
        fontWeight: 'bold',
        marginTop: 30,
        alignSelf: 'center'
    }
});