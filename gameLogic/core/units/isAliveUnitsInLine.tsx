import {Unit} from '../../unitsClasses/Unit';

export const isAliveUnitsInLine = (line: number[], Units: Unit[]) => {
  const units = Units.filter((_, a) => line.includes(a));

  for (let a = 0; a < units.length; a++) {
    if (units[a].hp > 0) {
      return true;
    }
  }

  return false;
};
