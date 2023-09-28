import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { Ionicons } from "@expo/vector-icons";

export default function Resturant({id,
    image,
    name,
    rating,
    address,
    short_description,
    dishes,
    long,
    lat,}) {
        const navigation=useNavigation()
  return (
    <TouchableOpacity className="bg-white mr-3 shadow" onPress={()=>{
         navigation.navigate("Resturant",{
            id,
            image,
            name,
            rating,
            address,
            short_description,
            dishes,
            long,
            lat,

         }) 
       
    }}>
          <Image
         source={{
           uri: urlFor(image).url(),
         }}
         className=" h-36 w-63 rounded-sm "
       />
       <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{name}</Text>
           <View className="flex-row items-center space-x-2">
           <Ionicons name="star" size={22} opacity={0.5} color="#fcc203" />
              <Text className="text-xs text-gray-500">
              <Text className="text-yellow-400">{rating} </Text> . offer
              </Text>
             
           </View>
           <View className="flex-row items-center space-x-1">
           <Ionicons
            name="location-outline"
            size={22}
            opacity={0.4}
            color="gray"
          />
            <Text className="text-xs text-gray-500 mx-5">Nearby . {address}</Text>
           </View>
       </View>

    </TouchableOpacity>
  )
}