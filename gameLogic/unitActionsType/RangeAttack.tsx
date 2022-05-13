import {IAvailableTarget} from '../Interfaces/AvailableTarget';

import {Unit} from '../unitsClasses/Unit';
import {getAliveUnits} from '../core/units/getAliveUnits';
import {getEnemyTeam} from '../core/teams/getEnemyTeam';
import {getSingleTarget} from '../core/units/getSingleTarget';

export class RangeAttack implements IAvailableTarget {
  getAvailabeTarget(Units: Unit[], currentUnit: string) {
    const targets = getAliveUnits(getEnemyTeam(Units, currentUnit));
    return targets;
  }

  getTarget(Units: Unit[], currentUnit: string, targetId?: string | undefined) {
    const enemies = this.getAvailabeTarget(Units, currentUnit);
    const target = getSingleTarget(enemies, targetId);

    return target;
  }
}
