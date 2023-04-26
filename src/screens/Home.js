import React from 'react';
import { SafeAreaView } from 'react-native';
import Text from '../components/text/text';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Button from '../components/Button';

const Home = ({ navigation }) => {

    // const pressSignOut = () => {
    //     signOut(auth).then(() => {
    //         console.log(auth);
    //     }).catch((error) => {

    //     });
    // }

    return (
        <SafeAreaView>
            <Text preset='h2' style={{ textAlign: 'center', margin: 20 }}>What service do you want</Text>
            {/* <Button
                title={'SignOut'}
                onPress={pressSignOut}
                customStyles={{ width: 120 }}
            /> */}
            <View style={{ flexDirection: 'row' }}>
                <Button
                    title='Mess Required'
                    customStyles={styles.servicesBox}
                    onPress={() => navigation.navigate('AllToLet')}
                />
                <Button
                    title='ToLet Post'
                    customStyles={styles.servicesBox}
                    onPress={() => navigation.navigate('ToLetPost')}
                />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    servicesBox: {
        margin: 'auto',
        textAlign: 'center',
        borderRadius: 10,
        backgroundColor: '#ccff99',
        height: 50,
        width: '40%',
        fontSize: 32,
    }
});

export default Home;
