import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import ResulList from '../components/ResultList'
import {set} from "react-native-reanimated";


const WishListScreen = ({navigation}) => {
    const [results = [], setResults] = useState()

    const getData = () => {
        AsyncStorage.getItem('mealsId').then(results => setResults(JSON.parse(results)));
    }

    useEffect(getData, []);

    return (
        <View style={{flex: 1}}>
            <ScrollView>
                <ResulList results={results} title='Whish List' navigation={navigation}/>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({})

export default WishListScreen