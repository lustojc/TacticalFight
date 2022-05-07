/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import { Sirena } from './src/components/UnitsClasses/Paralizers/Sirena';

const App = () => {

  let sirena = new Sirena()
  
  return (
    <SafeAreaView>
      <Text>{sirena.name}</Text>
    </SafeAreaView>
  );
};

export default App;
