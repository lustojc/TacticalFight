import {v4 as uuidv4} from 'uuid';

import {Heal} from '../../unitActions/Heal';
import {EndDefense} from '../../core/defense/EndDefense';
import {HealAllUnits} from '../../unitActionsType/HealAllUnits';
import {Unit} from '../Unit';
import {Healers} from './Healers';

export class Bishop extends Healers {
  constructor() {
    super(
      uuidv4(),
      'Bishop',
      130,
      130,
      20,
      false,
      25,
      new Heal(),
      new EndDefense(),
      new HealAllUnits(),
    );
  }

  Action(Units: Unit[], currentUnit: string): Unit[] {
    return this.healTeammates(Units, currentUnit);
  }
}
