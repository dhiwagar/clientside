import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Basketscreen() {
  const navigation =useNavigation()
  return (
    <View>
      <Text>Basketscreen</Text>
    </View>
  )
}