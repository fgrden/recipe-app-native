import React, {useState} from 'react'
import {View, Text, StyleSheet, ScrollView, Button} from 'react-native'
import SearchBar from '../components/SearchBar'
import ResulList from '../components/ResultList'
import useResults from '../hooks/useResults'




const SearchScreen = ({navigation}) =>{
    const [term, setTerm] = useState('')
    const [searchLates, resultsLatest, errorMessage] = useResults('https://www.themealdb.com/api/json/v2/9973533/latest.php');
    const [searchRandom, resultsRandom, errorRandom] = useResults('https://www.themealdb.com/api/json/v2/9973533/randomselection.php');
    const [searchName, resultsName, errorName] = useResults('https://www.themealdb.com/api/json/v1/1/search.php?');

    return(
    <View style={{flex:1}} >
        <SearchBar
            onDoneText ={() => searchName("s="+term)}
            onNewText ={newTerm => setTerm(newTerm)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Button title="Show wish list" style={styles.btn} onPress={() => navigation.navigate('WishList')}/>

        <ScrollView>
            {resultsName && <ResulList results={resultsName} title='Searched Melas' navigation={navigation}/>}
            <ResulList results={resultsLatest} title='Latest Meals' navigation={navigation}/>
            <ResulList results={resultsRandom} title='Random Melas' navigation={navigation}/>
        </ScrollView>
        

    </View>
    )
}


const styles = StyleSheet.create({
    btn: {
        margin: 10,
    }
})

export default SearchScreen