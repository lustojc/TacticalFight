import {IAvailableTarget} from '../Interfaces/AvailableTarget';

import {Unit} from '../unitsClasses/Unit';
import {getAliveUnits} from '../core/units/getAliveUnits';
import {getMeleeTarget} from '../core/units/getMeleeTarget';
import {getMeleeEnemyUnits} from '../core/units/getMeleeEnemyUnits';

export class MeleeAttack implements IAvailableTarget {
  getAvailabeTarget(Units: Unit[], currentUnit: string) {
    const target = getAliveUnits(getMeleeEnemyUnits(Units, currentUnit));
    return target;
  }

  getTarget(Units: Unit[], currentUnit: string, targetId?: string | undefined) {
    const enemies = this.getAvailabeTarget(Units, currentUnit);
    const target = getMeleeTarget(enemies, targetId);

    return target;
  }
}
