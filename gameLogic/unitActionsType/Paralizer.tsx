import {IAvailableTarget} from '../Interfaces/AvailableTarget';

import {Unit} from '../unitsClasses/Unit';
import {getAliveUnits} from '../core/units/getAliveUnits';
import {getEnemyTeam} from '../core/teams/getEnemyTeam';
import {getSingleTarget} from '../core/units/getSingleTarget';

export class Paralizer implements IAvailableTarget {
  getAvailabeTarget(Units: Unit[], currentUnit: string) {
    const target = getAliveUnits(getEnemyTeam(Units, currentUnit));
    return target;
  }

  getTarget(Units: Unit[], currentUnit: string, targetId?: string | undefined) {
    const availableTarget = this.getAvailabeTarget(Units, currentUnit);

    const singleTarget = getSingleTarget(availableTarget, targetId);
    return singleTarget;
  }
}
