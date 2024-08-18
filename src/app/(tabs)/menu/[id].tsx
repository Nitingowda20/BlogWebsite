import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { Stack ,useLocalSearchParams } from 'expo-router'

const ProductsDetail = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={style.container} >
      <Stack.Screen  options={{title : 'Details: ' + id}} />

      <Text style={style.title}>ProductsDetail for Id : {id} </Text>
      
    </View>
  )
}

export default ProductsDetail

const style = StyleSheet.create({
  container: {

  },
    title: {
    // color : Colors.dark.tint,
    color : 'white',
    fontSize: 30,
    fontWeight: 'bold',
    margin:10
  }
});