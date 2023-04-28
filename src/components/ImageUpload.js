import { View, Text } from 'react-native'
import React from 'react'
import * as launchImageLibrary from 'react-native-image-picker';
import Button from './Button';

export default function ImageUpload() {
    const options = {
        title: 'Select Image',
        type: 'library',
        options: {
            mediaType: 'photo',
            includeBase64: false
        },
    }
    const imageDetails = async () => {
        const result = await launchImageLibrary(options)
        console.log(result);
    }

    return (
        <View style={{ alignItems:'center' }}>
            <Button title={'Image'} onPress={imageDetails} />
        </View>
    )
}