import {Unit} from '../../unitsClasses/Unit';

export const getUnitPosition = (units: Unit[], currentUnit: string) => {
  let unitPosition = 0;

  units.map(unit => {
    unit.id === currentUnit && (unitPosition = units.indexOf(unit));
  });
  return unitPosition;
};
