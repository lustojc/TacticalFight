/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {ImageBackground, SafeAreaView} from 'react-native';

import Field from './src/components/Field/Field';

import {CreateTeams} from './gameLogic/core/teams/createTeams';

const App = () => {
  const {firstTeam, secondTeam} = CreateTeams();

  let background = require('./src/assets/img/background.jpg');

  return (
    <SafeAreaView>
      <ImageBackground source={background}>
        <Field firstTeam={firstTeam} secondTeam={secondTeam} />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default App;
