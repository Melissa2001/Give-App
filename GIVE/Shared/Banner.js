import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'

const data = require('../assets/data/products.json')
import OrganizationList from './Organization/OrganizationList'
import { SwiperFlatList } from 'react-native-swiper-flatlist';


const OrganizationContainer = (props) => {
 
    const [org, setOrg] = useState([]);
    useEffect(() => {
        setOrg(data);
        return () => {
            setOrg([])
        }
    }, [])
    return (
        <View style={{marginTop: 50,marginBottom:100,backgroundColor: '#fff'}}>
            <SwiperFlatList 
            autoplay
            autoplayDelay={5}
            autoplayLoop
            index={2}
            showPagination
            data={org}
                renderItem={({ item }) =>(
                    <OrganizationList
                    navigation={props.navigation}
                    key={item.id}
                    item={item} />)}
                keyExtractor={item => item.id}
            />
                


        </View>
    )
}

export default OrganizationContainer