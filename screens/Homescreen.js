import { View, Text, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Feather,Ionicons } from "@expo/vector-icons";
import sanityClient from "../sanity";
import { useEffect } from 'react'
import { useState } from 'react'
import Categories from '../components/Categories'

export default function Homescreen() {
    const navigation=useNavigation()
    const [featuredCategories, setFeaturedCategories] = useState([]);
     useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
     },[])
    
  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "featured"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->
      }
    }
    `
      )
      .then((data) => {
        console.log(data);
        setFeaturedCategories(data);
      });
  }, []);

  return (
  <SafeAreaView className="bg-white pt-5">
    <View className="flex-row pb-3 items-center mx-3 space-x-2"> 
    <Image
    source={{
      uri: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
    }}
    className="h-10 w-10 bg-gray-300 rounded-full"
    />
    <View className="flex-1">
      <Text className="font-bold text-gray-400 text-xs"> Deliver Now</Text>
      <Text className="font-bold text-xl">current location
      <Feather name="chevron-down" size={20} color="#E33342" />
      </Text>
    </View>
    <Ionicons name="person-outline" size={35} color="#E33342" />
    </View>
    <View className="flex-row items-center space-x-2 mx-4 pb-2">
      <View className="flex-row  space-x-2 flex-1 bg-gray-200 p-3">
      <Ionicons name="search-outline" size={20} color="gray" />
      <TextInput placeholder="Restaurants and cuisines"/>
 
      </View>
      <Feather name="sliders" size={20} color="#E33342" />

    </View>
    <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Categories />

      </ScrollView>
    
  </SafeAreaView>
   
  )
}