import React,{useState,useEffect} from "react";
import {Image,View,StyleSheet,Text,ScrollView,Button,Dimensions} from 'react-native';
import {Left,Right,Container,H1} from 'native-base';
var { width } = Dimensions.get("window")
const SingleOrg=(props)=>{

    const [item,setItem] = useState(props.route.params.item);
    const [availability,setAvailability]=useState('');

    return(
        
            <ScrollView style={{marginBottom:80,padding:5}}>
                
                    
                    <Image
                        source={{
                            uri:item.image?item.image:'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                        }}
                        resizeMode="cover"
                        style={styles.image}
                    />
                

            </ScrollView>
       
    )
}

const styles=StyleSheet.create({
    image:{
        height: width,
        width: width ,
        borderRadius:20,
        alignSelf:'center'
    }
})

export default SingleOrg