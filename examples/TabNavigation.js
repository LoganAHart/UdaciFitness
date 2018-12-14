import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import {
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';

function Home() {
  return (
    <View style={styles.centerView}>
      <Text>Home</Text>
    </View>
  );
}

function Dashboard() {
  return (
    <View style={styles.centerView}>
      <Text>Dashboard</Text>
    </View>
  );
}

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Dashboard: Dashboard,
});

const TabContainer = createAppContainer(TabNavigator);

class TabNavigation extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TabContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TabNavigation;
