import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import React, { useState } from 'react'
import Text from '../../components/text/text'
import Input from '../../components/Input'
import Button from '../../components/Button'
import useAuth from '../../hooks/useAuth'

const auth = getAuth()
export default function Login() {
  const { googleSignIn, facebookSignIn, userSignIn } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loginAccount = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        userSignIn(user.email, user.password)
        e.preventDefault()
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ height: 250, width: '80%', marginTop: 40, alignSelf: 'center' }}
        source={require('../../../assets/login.jpg')}
        resizeMood='cover'
      />
      <Input
        placeholder='Email'
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder='Password'
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />

      <View style={styles.directSignIn}>
        <Button
          title={'Login'}
          customStyles={{ alignSelf: 'center', margin: 15 }}
          onPress={loginAccount}
        />

        <Text preset="small" style={{ marginTop: 20, marginBottom: 15 }} >OR connect with</Text>
        <View style={{ flexDirection: 'row' }}>
          <Button
            title={<GoogleIcon sx={{ color: 'black', fontSize: 30 }} />}
            onPress={googleSignIn}
            customStyles={{ width: 120 }}
          />

          <Button
            title={<FacebookOutlinedIcon sx={{ color: 'black', fontSize: 30 }} />}
            onPress={facebookSignIn}
            customStyles={{ width: 120 }}
          />
        </View>

        <Pressable onPress={() => { navigation.navigate('SignUp') }} >
          <Text style={styles.signInText}>Don't have an account <Text style={{ color: "green" }}>Sign Up</Text> </Text>
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
    marginTop: 50,
    alignSelf: 'center'
  }
});