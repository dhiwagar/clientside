import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

export default function Resturantscreen({}) {
  const navigation = useNavigation()
  const {
      params:{
        id,
        image,
        name,
        rating,
        address,
        short_description,
        dishes,
        long,
        lat,
      }
  }=useRoute()
  return (
    <View>
      <Text>Resturantscreen</Text>
    </View>
  )
}