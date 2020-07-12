import React from 'react'
import {View, Image, Text, StyleSheet, TextInput} from 'react-native'

const ResultDetail = ({result}) =>{
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.strMealThumb}} />
            <Text style={styles.text}>{result.name}</Text>
            <Text>
                {result.strMeal}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        marginLeft: 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    text:{
        fontWeight: 'bold'
    }
})

export default ResultDetail