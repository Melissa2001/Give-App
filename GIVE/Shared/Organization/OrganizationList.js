import React from "react";
import { TouchableOpacity,View,Dimensions } from "react-native";
import OrganizationCard from "./OrganizationCard";

var {width}=Dimensions.get("window")
const OrganizationList=(props)=>{
    const {item}=props
    return(
        <TouchableOpacity style={{width:'50%'}}>
            <View style={{width:width}}
            >
<OrganizationCard {...item}/>
            </View>
        </TouchableOpacity>
    )
        
    
}

export default OrganizationList