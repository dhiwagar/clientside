import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import sanityClient from "../sanity";
import { Ionicons } from "@expo/vector-icons";
import Resturant from './Resturant';

export default function Featurerow({title,description,id}) {
    const [restaurants,setresturants]=useState([])
    useEffect(() => {
        sanityClient
          .fetch(
            `
        *[_type == "featured" && _id == $id]{
          ...,
          restaurants[]->{
            ...,
            dishes[]->,
            type->{
              name
            }
          }
        }[0]
        `,
            { id }
          )
          .then((data) => {

            setresturants(data?.restaurants);
          });
      }, [id]);
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
      <Text className="font-bold text-lg">
       {title}
      </Text>
      <Ionicons name="arrow-forward-outline" color="#E33342" size={24} />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView  
        horizontal
        className="pt-4"
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        
      
    
      >
        {restaurants.map((restaurant,index)=>(
          <Resturant
          key={index}
          {...restaurant}
          />
          
        ))}
      </ScrollView>
    </View>
  )
}