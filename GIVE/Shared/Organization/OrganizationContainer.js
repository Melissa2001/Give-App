import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'

const data = require('../../assets/data/products.json')
import OrganizationList from './OrganizationList'


const OrganizationContainer = (props) => {
 
    const [org, setOrg] = useState([]);
    useEffect(() => {
        setOrg(data);
        return () => {
            setOrg([])
        }
    }, [])
    return (
        <View style={{marginTop: 50,marginBottom:100}}>
            <Text>Organization Container</Text>

            <FlatList data={org}
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