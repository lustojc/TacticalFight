import {IAvailableTarget} from '../Interfaces/AvailableTarget';

import {Unit} from '../unitsClasses/Unit';
import {getAliveUnits} from '../core/units/getAliveUnits';
import {getEnemyTeam} from '../core/teams/getEnemyTeam';

export class MassAttack implements IAvailableTarget {
  getAvailabeTarget(Units: Unit[], currentUnit: string) {
    const targets = getAliveUnits(getEnemyTeam(Units, currentUnit));
    return targets;
  }

  getTarget(Units: Unit[], currentUnit: string) {
    const enemies = this.getAvailabeTarget(Units, currentUnit);
    return enemies;
  }
}
