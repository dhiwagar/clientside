import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import sanityClient, { urlFor } from "../sanity";
import Categorycard from './Categorycard';

const Categories = () => {
    const [categories,setcategories]=useState([])

    useEffect(() => {
        sanityClient
          .fetch(
            `
        *[_type == 'category']
        `
          )
          .then((data) => setcategories(data));
      }, []);
    
    
  return (
    <ScrollView 
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}
  
    >
{
    categories.map((category)=>(
   <Categorycard 
   key={category._id}
   imgUrl={urlFor(category.image).width(200).url()}
   title={category.name}
   />
    ))
}
    </ScrollView>
  )
}

export default Categories