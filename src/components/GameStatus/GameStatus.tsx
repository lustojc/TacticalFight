import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import {Unit} from '../../../gameLogic/unitsClasses/Unit';

interface IGameOver {
  enemyTeam: Unit[];
}

const GameStatus: React.FC<IGameOver> = ({enemyTeam}) => {
  const isAllEnemiesDie = enemyTeam.every(unit => {
    return unit.hp === 0;
  });

  const colorStatus = isAllEnemiesDie ? 'red' : 'green';

  return (
    <View style={styles.centeredView}>
      <Text style={[styles.fontSize, {color: colorStatus}]}>
        {isAllEnemiesDie ? 'Game Over!' : 'Game start!'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fontSize: {
    fontSize: 30,
  },
});

export default GameStatus;
