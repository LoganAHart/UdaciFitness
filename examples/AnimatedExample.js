import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Animated,
} from 'react-native';

export default class AnimatedExample extends React.Component {
  state = {
    opacity: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0),
  }
  componentDidMount() {
    const { opacity, width, height } = this.state;
    Animated.timing(opacity, { toValue: 1, duration: 1000 })
      .start();
    Animated.spring(width, { toValue: 300, speed: 5 })
      .start()
    Animated.spring(height, { toValue: 300, speed: 5 })
      .start()
  }
  render() {
    const { opacity, width, height } = this.state;
    return (
      <View style={styles.container}>
        <Animated.Image
          style={[styles.img, { opacity, width, height }]}
          source={{uri: 'https://tylermcginnis.com/tylermcginnis_glasses-300.png'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 200,
    height: 200,
  },
});
