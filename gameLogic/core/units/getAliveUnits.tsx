import {Unit} from '../../unitsClasses/Unit';

export const getAliveUnits = (units: Unit[]) => {
  const aliveUnits = units.filter(unit => unit.hp > 0);
  return aliveUnits;
};
