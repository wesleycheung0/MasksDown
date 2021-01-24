import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/global'

export default function N95({ navigation }){
    const pressHandler = () => {
        navigation.goBack();
    }
    return(
        <View style={ globalStyles.container}>
            <Text>N95 screen</Text>
            <Button title= 'Back' onPress={pressHandler}/>

        </View>
    )
}
