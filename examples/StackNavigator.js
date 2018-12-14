import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
import { white } from '../utils/colors';


function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Home View</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Dashboard')}
      >
        <Text style={styles.text}>Press here for the Dashboard</Text>
      </TouchableOpacity>
    </View>
  );
}

function Dashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Dashboard View</Text>
    </View>
  );
}

const AppStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: 'Dashboard',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'red',
      },
    },
  },
});

const ContainerStackNavigator = createAppContainer(AppStackNavigator);

class StackNavigator extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ContainerStackNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
  },
  text: {
    color: white,
    fontSize: 20,
  },
  btn: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f00',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default StackNavigator;
