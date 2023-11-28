import React from 'react'
import { Image, StyleSheet } from 'react-native'

const Logo=()=> {
  return <Image source={require('../assets/user.png')} style={styles.image} />
}
export default Logo ;
const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
})
