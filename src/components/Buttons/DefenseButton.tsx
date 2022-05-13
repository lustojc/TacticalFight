import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';

import {Unit} from '../../../gameLogic/unitsClasses/Unit';
import {StartDefense} from '../../../gameLogic/core/defense/StartDefense';
import {EndDefense} from '../../../gameLogic/core/defense/EndDefense';

interface ICurrentUnit {
  currentUnit: Unit;
  changeUnit: () => void;
}

const DefenseButton: React.FC<ICurrentUnit> = ({currentUnit, changeUnit}) => {
  if (currentUnit.defense instanceof StartDefense) {
    currentUnit.defense = new EndDefense();
  }

  const defenseCurrentUnit = () => {
    currentUnit.defense = new StartDefense();
    changeUnit();
  };

  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={defenseCurrentUnit}>
      <View style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Defense my unit!</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 70,
  },
  buttonStyle: {
    borderWidth: 1,
    width: 250,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'lightgreen',
  },
  buttonText: {
    color: 'black',
  },
});

export default DefenseButton;
