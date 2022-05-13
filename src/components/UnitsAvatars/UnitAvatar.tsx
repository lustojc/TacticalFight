import {View, Image, StyleSheet} from 'react-native';
import React from 'react';

import {Unit} from '../../../gameLogic/unitsClasses/Unit';
import {UnitAvatars} from './UnitImgProvider';

import {StartDefense} from '../../../gameLogic/core/defense/StartDefense';
let sleep = require('../../assets/img/GameIndicators/sleep.webp');
let shield = require('../../assets/img/GameIndicators/shield.png');
let skull = require('../../assets/img/GameIndicators/skull.png');

interface IUnitsAvatar {
  units: Unit;
}

const UnitAvatar: React.FC<IUnitsAvatar> = ({units}) => {
  const hpIndicator = (unit: Unit) => {
    const currentHp =
      unit.hp === 0 ? 100 : ((unit.maxHP - unit.hp) / unit.maxHP) * 100;

    return currentHp;
  };

  const currentHpFill = hpIndicator(units);
  return (
    <View>
      {units.defense instanceof StartDefense && units.hp !== 0 && (
        <Image style={styles.defenseEffect} source={shield} />
      )}
      {units.hp !== 0 && units.isParalized && (
        <Image style={styles.paralizeEffect} source={sleep} />
      )}
      {units.hp === 0 && <Image style={styles.diedUnit} source={skull} />}
      <Image style={styles.cardImgSize} source={UnitAvatars(units.name)} />
      <View style={[styles.hpIndicatorFill, {height: currentHpFill + '%'}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardImgSize: {
    width: 90,
    height: 90,
  },
  defenseEffect: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 2,
  },
  paralizeEffect: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 45,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 50,
    right: 3,
    zIndex: 2,
  },
  hpIndicatorFill: {
    position: 'absolute',
    backgroundColor: 'red',
    zIndex: 1,
    width: '100%',
    opacity: 0.4,
    bottom: 0,
  },
  diedUnit: {
    width: 90,
    height: 90,
    position: 'absolute',
    zIndex: 2,
  },
});

export default UnitAvatar;
