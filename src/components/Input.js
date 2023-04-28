import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function Input({ secureTextEntry, placeholder, onChangeText, multiline, keyboardType }) {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.textInput}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
      multiline={multiline}
      keyboardType={keyboardType}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 35,
    width: '70%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 15,
    padding: 10
  }
})