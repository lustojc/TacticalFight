import {v4 as uuidv4} from 'uuid';

import {Paralize} from '../../unitActions/Paralize';
import {EndDefense} from '../../core/defense/EndDefense';
import {Paralizer} from '../../unitActionsType/Paralizer';
import {Unit} from '../Unit';
import {Paralizers} from './Paralizers';

export class Sirena extends Paralizers {
  constructor() {
    super(
      uuidv4(),
      'Sirena',
      80,
      80,
      20,
      false,
      new Paralize(),
      new EndDefense(),
      new Paralizer(),
    );
  }

  Action(Units: Unit[], currentUnit: string, targetId: string): Unit[] {
    return this.paralizeEnemyUnit(Units, currentUnit, targetId);
  }
}
