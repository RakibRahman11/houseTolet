import { View, Text } from 'react-native'
import React from 'react'
import Button from '../../components/Button'
import { useNavigation } from '@react-navigation/native'

export default function AllToLet() {
    const navigation = useNavigation()
    return (
        <View>
            <Button 
                title='Back'
                customStyles={{ width:80, borderRadius: 5, padding: 5 }}
                onPress={() => navigation.goBack()} />
            <Text>AllToLet</Text>
        </View>
    )
}