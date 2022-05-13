import {View} from 'react-native';
import React, {useState, useEffect} from 'react';

import {v4 as uuidv4} from 'uuid';

import RoundInfo from '../RoundInfo/RoundInfo';
import GameOver from '../GameStatus/GameStatus';
import Team from '../Team/Team';
import DefenseButton from '../Buttons/DefenseButton';

import {Unit} from '../../../gameLogic/unitsClasses/Unit';
import {getReversedTeam} from '../../../gameLogic/core/units/reverseUnitsPosition';

interface IField {
  firstTeam: Unit[];
  secondTeam: Unit[];
}

const Field: React.FC<IField> = ({firstTeam, secondTeam}) => {
  const [unitIndex, setUnitIndex] = useState<number>(0);
  const [round, setRound] = useState<number>(1);

  const unitsArray =
    unitIndex < firstTeam.length
      ? firstTeam.concat(secondTeam)
      : secondTeam.concat(firstTeam);

  const halfUnits = unitsArray.length / 2;

  const currentTeam = unitIndex < halfUnits ? firstTeam : secondTeam;
  const enemyTeam = unitIndex < halfUnits ? secondTeam : firstTeam;
  const teams = [getReversedTeam(currentTeam), enemyTeam];

  const currentUnit =
    unitIndex < halfUnits
      ? unitsArray[unitIndex]
      : unitsArray[unitIndex - halfUnits];

  const changeUnit = () => {
    if (unitIndex > unitsArray.length - 2) {
      setRound(state => (state = state + 1));
    }
    setUnitIndex(
      state => (state = state > unitsArray.length - 2 ? 0 : state + 1),
    );
  };

  useEffect(() => {
    if (currentUnit.isParalized || currentUnit.hp === 0) {
      changeUnit();
    }
  });

  useEffect(() => {
    enemyTeam.forEach(unit => {
      unit.isParalized = false;
    });
  }, [enemyTeam]);

  return (
    <View>
      <RoundInfo round={round} />
      <GameOver enemyTeam={enemyTeam} />
      <View>
        {teams.map(team => {
          return (
            <Team
              key={uuidv4()}
              team={team}
              currentUnit={currentUnit}
              unitsArray={unitsArray}
              changeUnit={changeUnit}
            />
          );
        })}
      </View>
      <DefenseButton currentUnit={currentUnit} changeUnit={changeUnit} />
    </View>
  );
};

export default Field;
