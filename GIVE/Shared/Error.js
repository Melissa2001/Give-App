import React from "react";
import { Text } from "react-native";

const Error = (props) => {
    return ( 
        <Text style={{
            alignSelf:'center',
            color: 'red',
            marginTop:10,
            
        }}>{props.message}</Text>
    )
}


export default Error