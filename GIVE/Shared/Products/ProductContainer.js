import { View, Text,StyleSheet,ActivityIndicator,FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'

import ProductList from './ProductList';

const data = require('../../assets/data/products.json');

const ProductContainer = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        setProducts(data);
        return()=>{
            setProducts([]);
        }
    },[])

  return (
    <View>
      <Text>ProductContainer</Text>
      <FlatList
      horizontal
      data={products}
      renderItem={({item})=><ProductList 
        key={item.id}
        numColumns={2}
        item={item}
        />
    }
      keyExtractor={(item)=>item.name}
      />
    </View>
  )
}

export default ProductContainer