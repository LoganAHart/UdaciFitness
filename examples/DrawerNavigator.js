import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { white } from '../utils/colors';

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home View</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.toggleDrawer()}>
        <Text style={styles.btnText}>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
}

function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard View</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.toggleDrawer()}>
        <Text style={styles.btnText}>Open Drawer</Text>
      </TouchableOpacity>
    </View>
  );
}

const Drawer = createDrawerNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      drawerLabel: 'Home',
      drawerIcon: () => <FontAwesome name='home' size={20} color='red' />,
    }
  },
  Dashboard: {
    screen: Dashboard,
    navigationOptions: {
      drawerLabel: 'Dashboard',
      drawerIcon: () => <FontAwesome name='dashboard' size={20} color='red' />,
    }
  },
});

const ContainerDrawerNavigator = createAppContainer(Drawer)

class DrawerNavigator extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ContainerDrawerNavigator />
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
  btnText: {
    color: white,
    fontSize: 18,
  },
});

export default DrawerNavigator;
