import {IOpponents} from '../../Interfaces/Opponents';

import {createUnits} from '../../unitsClasses/createUnits';
import {Unit} from '../../unitsClasses/Unit';

export const CreateTeams = (): IOpponents => {
  const maxUnits = 12;

  const unitList = [
    'Skeleton',
    'Centaur',
    'Bandit',
    'Elf Archer',
    'Skeleton Mage',
    'Archimage',
    'Monk',
    'Bishop',
    'Sirena',
  ];

  let firstTeam: Unit[] = [];

  let secondTeam: Unit[] = [];

  for (let i = 0; i < maxUnits; i++) {
    let randomUnit = Math.floor(Math.random() * 9);

    let createdUnit = createUnits.createUnit(unitList[randomUnit]);

    if (i < maxUnits / 2) {
      firstTeam.push(createdUnit);
    } else {
      secondTeam.push(createdUnit);
    }
  }

  return {firstTeam, secondTeam};
};
