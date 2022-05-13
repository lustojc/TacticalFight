import {IAvailableTarget} from '../Interfaces/AvailableTarget';

import {Unit} from '../unitsClasses/Unit';
import {getAliveUnits} from '../core/units/getAliveUnits';
import {getSingleTarget} from '../core/units/getSingleTarget';
import {getCurrentTeam} from '../core/teams/getCurrentTeam';

export class HealSingleUnit implements IAvailableTarget {
  getAvailabeTarget(Units: Unit[], currentUnit: string) {
    const targets = getAliveUnits(getCurrentTeam(Units, currentUnit));
    return targets;
  }

  getTarget(Units: Unit[], currentUnit: string, targetId?: string | undefined) {
    const ally = this.getAvailabeTarget(Units, currentUnit);
    const target = getSingleTarget(ally, targetId);

    return target;
  }
}
