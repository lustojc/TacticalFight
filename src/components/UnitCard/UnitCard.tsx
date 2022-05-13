import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {Unit} from '../../../gameLogic/unitsClasses/Unit';

import UnitAvatar from '../UnitsAvatars/UnitAvatar';

interface IUnitCard {
  units: Unit;
  currentUnit: Unit;
  unitsArray: Unit[];
  changeUnit: () => void;
}

const UnitCard: React.FC<IUnitCard> = ({
  units,
  currentUnit, // текущий выделенный юнит
  unitsArray, // массив всех юнитов
  changeUnit,
}) => {
  const takeUnitAction = () => {
    const targets = currentUnit.Action(unitsArray, currentUnit.id, units.id);
    targets.length && changeUnit();
  };

  const isCurrentTarget = () => {
    const target = currentUnit.target.getAvailabeTarget(
      unitsArray,
      currentUnit.id,
    );

    for (let i = 0; i < target.length; i++) {
      if (target[i].id === units.id) {
        return true;
      }
    }
    return false;
  };

  const unitHighlighting =
    units.id === currentUnit.id
      ? styles.currentUnit
      : isCurrentTarget() && units.id !== currentUnit.id
      ? styles.targetUnit
      : styles.defaultBorder;

  return (
    <View style={[styles.container, unitHighlighting]}>
      <TouchableOpacity onPress={() => takeUnitAction()}>
        <UnitAvatar units={units} />
        <Text style={styles.hpBar}>
          {units.hp} / {units.maxHP}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    margin: 4,
  },
  defaultBorder: {
    borderColor: 'blue',
    borderWidth: 4,
  },
  currentUnit: {
    borderColor: 'green',
    borderWidth: 4,
  },
  targetUnit: {
    borderColor: 'red',
    borderWidth: 4,
  },
  hpBar: {
    color: 'red',
    backgroundColor: 'black',
    marginLeft: 2,
  },
});

export default UnitCard;
