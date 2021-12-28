/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import LottieView from 'lottie-react-native';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
        <LottieView
        style={{ width: 200, height:200 }}
          source={require('./src/assets/loop_loading.json')} autoPlay loop />
      </View>
    </SafeAreaView>
  );
};


export default App;
