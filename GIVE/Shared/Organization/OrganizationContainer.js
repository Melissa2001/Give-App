import React,{useState,useEffect} from 'react'
import { View,Text,StyleSheet,ActivityIndicator,FlatList } from 'react-native'
const data=require('../../assets/data/products.json')
import OrganizationList from './OrganizationList'
const OrganizationContainer=()=>{
const [org,setOrg]=useState([]);
useEffect(()=>{
    setOrg(data);
    return()=>{
        setOrg([])
    }
},[])
    return(
        <View>
            <Text>Organization Container</Text>
            
            <FlatList data={org}
            renderItem={({item})=><OrganizationList 
            key={item.id}
            item={item}/>}
            keyExtractor={item=>item.id}
            />
            
            
        </View>
    )
}

export default OrganizationContainer