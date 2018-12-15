import React from 'react';
import {
  View,
  Platform,
  StatusBar,
} from 'react-native';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Constants } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import reducer from './reducers';
import AddEntry from './components/AddEntry';
import History from './components/History';
import EntryDetail from './components/EntryDetail';
import Live from './components/Live';
import { setLocalNotification } from './utils/helpers';
import { purple, white } from './utils/colors';

// import StyledComponents from './examples/StyledComponents'
// import TabNavigation from './examples/TabNavigation';
// import StackNavigator from './examples/StackNavigator';
// import DrawerNavigator from './examples/DrawerNavigator';
// import AnimatedExample from './examples/AnimatedExample';

function UdaciStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

const TabNavigator = createBottomTabNavigator(
  {
    History: History,
    AddEntry: AddEntry,
    Live: Live,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'History') {
          return <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
        } else if (routeName === 'AddEntry') {
          return <FontAwesome name='plus-square' size={30} color={tintColor} />
        }
        return Platform.OS === 'ios'
          ? <Ionicons name='ios-speedometer' size={30} color={tintColor} />
          : <Ionicons name='md-speedometer' size={30} color={tintColor} />
      }
    }),
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  },
);

const StackNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
  },
  EntryDetail: {
    screen: EntryDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: purple,
      },
    },
  },
});

const MainNavigator = createAppContainer(StackNavigator);

// export for main app
export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}

// // export for testing out examples
// export default class App extends React.Component {
//   render() {
//     return (
//       <AnimatedExample />
//     );
//   }
// }
