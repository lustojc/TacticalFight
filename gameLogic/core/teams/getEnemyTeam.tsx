import {Unit} from '../../unitsClasses/Unit';
import {getUnitPosition} from '../units/getUnitPosition';

export const getEnemyTeam = (units: Unit[], currentUnit: string) => {
  const unitPosition = getUnitPosition(units, currentUnit);
  const halfUnits = units.length / 2;

  const enemyTeam =
    unitPosition > halfUnits
      ? units.slice(0, halfUnits)
      : units.slice(halfUnits, units.length);

  return enemyTeam;
};
