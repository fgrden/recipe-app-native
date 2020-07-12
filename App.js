import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import SearchScreen from './src/screens/SearchScreen'
import ResultShowScreen from './src/screens/ResultsShowScreen';
import WishListScreen from './src/screens/WhishListScreen';


const navigator = createStackNavigator({
    Search: SearchScreen,
    ResultsShow: ResultShowScreen,
    WishList: WishListScreen,
}, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Recipe App'
    }
});


export default createAppContainer(navigator);