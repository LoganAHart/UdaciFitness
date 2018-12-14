import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import {
  createBottomTabNavigator,
  StackNavigator,
  DrawerNavigator,
} from 'react-navigation';

function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
}

function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  );
}

const Tabs = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Dashboard: {
    screen: Dashboard,
  }
});

class ReactNavigation extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ReactNavigation;
