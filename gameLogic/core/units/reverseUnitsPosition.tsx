import {Unit} from '../../unitsClasses/Unit';

export const getReversedTeam = (currentTeam: Unit[]) => {
  let team = [];
  for (let i = currentTeam.length - 1; i >= 0; i--) {
    team.push(currentTeam[i]);
  }
  return team;
};
