import React, { Component } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { purple, white } from '../utils/colors'; 

export default class Live extends Component {
  state = {
    coords: null,
    status: 'granted',
    direction: '',
  }
  askPermission = () => {

  }
  render() {
    const { status, coords, direction } = this.state;
    if (status === null) {
      return <ActivityIndicator style={{marginTop: 30}} />
    }
    if (status === 'denied') {
      return (
        <View style={styles.center}>
          {Platform.OS === 'ios'
            ? <Ionicons name='ios-alert' size={50} />
            : <Ionicons name='md-alert' size={50} />}
          <Text>
            This feature requires location services. Enable location services in your settings if you wish to use this feature.
          </Text>
        </View>
      );
    }
    if (status === 'undetermined') {
      return (
        <View style={styles.center}>
          {Platform.OS === 'ios'
            ? <Ionicons name='ios-alert' size={50} />
            : <Ionicons name='md-alert' size={50} />}
          <Text>
            Enable location services to use this feature.
          </Text>
          <TouchableOpacity onPress={this.askPermission} style={styles.button}>
            <Text style={styles.buttonText}>
              Enable
            </Text>
          </TouchableOpacity>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.directionContainer}>
          <Text style={styles.header}>You're heading</Text>
          <Text style={styles.direction}>North</Text>
        </View>
        <View style={styles.metricContainer}>
          <View style={styles.metric}>
            <Text style={[styles.header, { color: white }]}>
              Altitude
            </Text>
            <Text style={[styles.subHeader, { color: white }]}>
              {200} Feet
            </Text>
          </View>
          <View style={styles.metric}>
            <Text style={[styles.header, { color: white }]}>
              Speed
            </Text>
            <Text style={[styles.subHeader, { color: white }]}>
              {8} mph
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    padding: 10,
    backgroundColor: purple,
    alignSelf: 'center',
    borderRadius: 5,
    margin: 20,
  },
  buttonText: {
    color: white,
    fontSize: 20,
  },
  directionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 35,
    textAlign: 'center',
  },
  direction: {
    color: purple,
    fontSize: 120,
    textAlign: 'center',
  },
  metricContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: purple,
  },
  metric: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  subHeader: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 5,
  },
});
