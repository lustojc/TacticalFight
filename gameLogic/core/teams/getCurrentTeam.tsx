import {Unit} from '../../unitsClasses/Unit';
import {getUnitPosition} from '../units/getUnitPosition';

export const getCurrentTeam = (Units: Unit[], currentUnit: string) => {
  const unitPosition = getUnitPosition(Units, currentUnit);

  const halfUnits = Units.length / 2;

  const currentTeam =
    unitPosition < halfUnits
      ? Units.slice(0, halfUnits)
      : Units.slice(halfUnits, Units.length);

  return currentTeam;
};
