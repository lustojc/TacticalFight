import {isAliveUnitsInLine} from './isAliveUnitsInLine';
import {getUnitPosition} from './getUnitPosition';
import {Unit} from '../../unitsClasses/Unit';

export const getMeleeEnemyUnits = (Units: Unit[], currentUnit: string) => {
  const lineOne = [0, 1, 2];
  const lineTwo = [3, 4, 5];
  const lineThree = [6, 7, 8];
  const lineFour = [9, 10, 11];

  const unitPosition = getUnitPosition(Units, currentUnit);

  if (lineOne.includes(unitPosition)) {
    if (!isAliveUnitsInLine(lineThree, Units)) {
      const targets = Units.filter((_, i) => lineFour.includes(i));
      return targets;
    }

    const indexes =
      unitPosition === 1
        ? lineThree
        : lineThree.filter(e => lineThree.indexOf(e) !== unitPosition);

    const targets = Units.filter((_, i) => indexes.includes(i));
    return targets;
  }

  if (lineTwo.includes(unitPosition)) {
    if (isAliveUnitsInLine(lineOne, Units)) {
      return [];
    }

    if (
      !isAliveUnitsInLine(lineOne, Units) &&
      !isAliveUnitsInLine(lineThree, Units)
    ) {
      const targets = Units.filter((_, i) => lineFour.includes(i));
      return targets;
    }

    const targets = Units.filter((_, i) => lineThree.includes(i));
    return targets;
  }

  return [];
};
