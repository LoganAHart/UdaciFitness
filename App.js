import React from 'react';
import {
  View,
  Platform,
  StatusBar,
} from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Constants } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import reducer from './reducers';
import AddEntry from './components/AddEntry';
import History from './components/History';
import { purple, white } from './utils/colors';

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
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'History') {
          return <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
        }
        return <FontAwesome name='plus-square' size={30} color={tintColor} />
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

const TabContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <UdaciStatusBar backgroundColor={purple} barStyle='light-content' />
          <TabContainer />
        </View>
      </Provider>
    );
  }
}
