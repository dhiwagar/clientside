import { View, Text,TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../sanity'
import { AntDesign } from "@expo/vector-icons";
import { selectBasketItemsWithId } from '../slices/basketSlice';
import { addToBasket,removeFromBasket, } from '../slices/basketSlice';
import { useDispatch, useSelector } from "react-redux";
const Dishesrow = ({id, name, short_description, price, image}) => {
  const [ispressed,setpressed]=useState(false);
  const dispatch = useDispatch();
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, short_description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  console.log(items);
  return (
    <>
    <TouchableOpacity  className={`bg-white border p-4 border-gray-200 ${ispressed && "border-b-0"}`}
     onPress={()=>setpressed((curr)=>(!curr))}
    >
    <View className="flex-row">
      <View className="flex-1 pr-2">
        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-400">{short_description}</Text>
        <Text className="text-gray-400 mt-2">
        ₹{price} 
        </Text>
      </View>
      <View>
        <Image
          style={{
            borderWidth: 1,
            borderColor: "#f3f3f4",
          }}
          source={{
            uri: urlFor(image).url(),
          }}
          className="h-20 w-20 bg-gray-300 p-4"
        />
      </View>
    </View>
  </TouchableOpacity >
  {
    ispressed && (
      <View className="bg-white px-4">
        <View className="flex-row items-center space-x-2 pb-3">
        <TouchableOpacity
           onPress={removeItemFromBasket}
           disabled={!items.length}
            >
              <AntDesign
                name="minuscircle"
                color={items.length > 0 ? "#E33342" : "gray"}
                size={30}
              />
            </TouchableOpacity >

            <Text className="text-black">{items.length}</Text>

            <TouchableOpacity onPress={addItemToBasket}>
              <AntDesign name="pluscircle" color="#E33342" size={30} />
            </TouchableOpacity>
        </View>

      </View>
    )
  }
  </>

  )
}

export default Dishesrow