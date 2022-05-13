import {IAvailableTarget} from '../Interfaces/AvailableTarget';

import {Unit} from '../unitsClasses/Unit';
import {getAliveUnits} from '../core/units/getAliveUnits';
import {getCurrentTeam} from '../core/teams/getCurrentTeam';

export class HealAllUnits implements IAvailableTarget {
  getAvailabeTarget(Units: Unit[], currentUnit: string) {
    const targets = getAliveUnits(getCurrentTeam(Units, currentUnit));
    return targets;
  }

  getTarget(Units: Unit[], currentUnit: string) {
    const ally = this.getAvailabeTarget(Units, currentUnit);
    return ally;
  }
}
