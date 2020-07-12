import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, FlatList, Image, Button, Alert} from 'react-native'
import yelp from '../api/yelp'
import AsyncStorage from '@react-native-community/async-storage';




const ResultShowScreen = ({ navigation}) =>{
    const [result, setResult] = useState([])
    const [value, setValue] = useState([])
    const id =navigation.getParam('id')



    const getResult = async (id) =>{
        const response = await yelp.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        setResult(response.data.meals[0])
    }

    const getLocalIds = async () => {
        const value = await AsyncStorage.getItem('mealsId')
        setValue(value)
    }
    useEffect(() => {
        console.log(id)
        getLocalIds()
        getResult(id)
    }, [])

    if(!result){
        return null
    }

    const handlePress = async () => {
        const { strMeal, strInstructions, strMealThumb} = result
        const  newObject = {
            strMeal,
            strMealThumb,
            idMeal: id
        }
        let newValue = JSON.parse(value)

        try {
            if(!value) {
                newValue = [newObject]
            } else {
                newValue.push(newObject)
            }
            await AsyncStorage.setItem('mealsId', JSON.stringify(newValue))
            Alert.alert("Added to whishlist")
        } catch (e) {
            // saving error
            console.log(e)
        }
    }

    const { strMeal, strInstructions, strMealThumb} = result
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{strMeal}</Text>
            <View>
                <Image style={styles.image} source={{uri: strMealThumb}}/>
            </View>
            <Text style={styles.text}>{strInstructions}</Text>
            <Button title="Add to wishlist" onPress={handlePress}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        height: 200,
        width: 380,
        marginHorizontal: 15,
        borderRadius: 4
    },
    title:{
        //borderWidth: 2,
        borderRadius: 4,
        paddingHorizontal:5,
        backgroundColor: 'rgb(224, 223, 220)',
        marginHorizontal: 15,
        marginBottom: 10,
        fontSize:18,
        fontWeight: 'bold'
    },
    text:{
        //borderWidth: 2,
        marginHorizontal: 15,
        marginBottom: 10
    },
    container:{
        marginTop: 15
    }
})

export default ResultShowScreen