import React from 'react';
import { SafeAreaView } from 'react-native';
import Text from '../components/text/text';
import Button from '../components/Button';
import { getAuth, signOut } from "firebase/auth";

const Home = () => {
    const auth = getAuth();
    const pressSignOut = () => {
        signOut(auth).then(() => {
            console.log(auth);
        }).catch((error) => {
            
        });
    }
    return (
        <SafeAreaView>
            <Text preset='h1'>Hello</Text>
            <Button
                title={'SignOut'}
                onPress={pressSignOut}
                customStyles={{ width: 120 }}
            />
        </SafeAreaView>
    );
};

export default Home;