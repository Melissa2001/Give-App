import React from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";
import OrganizationCard from "./OrganizationCard";
import { useNavigation } from "@react-navigation/native";
var { width } = Dimensions.get("window")
const OrganizationList = (props) => {

      const navigation=useNavigation();
    const { item } = props
    return (
        <TouchableOpacity
            style={{ width: '50%' }}
            onPress={()=>
                navigation.navigate("SingleOrg",{item:item})}
           
            >
            <View style={{ width: width }}
            >
                <OrganizationCard {...item} />
            </View>
        </TouchableOpacity>
    )


}

export default OrganizationList