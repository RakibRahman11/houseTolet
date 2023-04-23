import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Button({title, customStyles, onPress}) {
  return (
    <TouchableOpacity style={[ styles.btn , customStyles ]} onPress={onPress}>
        <Text style={styles.btnTitle}>{title}</Text>
    </TouchableOpacity>
  )
} 

const styles = StyleSheet.create({
    btn:{
        width:'70%',
        height:35,
        borderRadius: 20,
        backgroundColor:'#fffff',
        justifyContent:'center',
        alignItems:'center',
        boxShadow: '2px 2px 2px #888888'
    },
    btnTitle:{
        fontSize:16
    }
  })