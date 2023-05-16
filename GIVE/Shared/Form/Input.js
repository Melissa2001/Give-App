import React, { useState } from "react";
import { TextInput,StyleSheet } from "react-native";

const Input=(props)=>{
    return(
        <TextInput style={{width:326,
        height:49,
        backgroundColor:'white',
        marginBottom:25,
        borderRadius:11,
        padding:10,
        borderWidth:1,
        borderColor:'#D0D0D0',
        alignSelf:'center'
    }}

        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        value={props.value}
        autoCorrect={props.autoCorrect}
        onChangeText={props.onChangeText}
        onFocus={props.onFocus}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        >

        </TextInput>
    );


}
export default Input;