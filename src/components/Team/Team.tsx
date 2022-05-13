import {View, StyleSheet} from 'react-native';
import React from 'react';

import {Unit} from '../../../gameLogic/unitsClasses/Unit';

import UnitCard from '../UnitCard/UnitCard';

interface ITeam {
  team: Unit[];
  currentUnit: Unit;
  unitsArray: Unit[];
  changeUnit: () => void;
}

const Team: React.FC<ITeam> = ({team, currentUnit, unitsArray, changeUnit}) => {
  return (
    <View style={styles.container}>
      {team.map(units => {
        return (
          <UnitCard
            key={units.id}
            units={units}
            currentUnit={currentUnit}
            unitsArray={unitsArray}
            changeUnit={changeUnit}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: 35,
    margin: 25,
  },
});

export default Team;
