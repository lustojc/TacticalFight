import {v4 as uuidv4} from 'uuid';

import {HealSingleUnit} from '../../unitActionsType/HealSingleUnit';
import {Heal} from '../../unitActions/Heal';
import {EndDefense} from '../../core/defense/EndDefense';
import {Healers} from './Healers';
import {Unit} from '../Unit';

export class Monk extends Healers {
  constructor() {
    super(
      uuidv4(),
      'Monk',
      90,
      90,
      20,
      false,
      40,
      new Heal(),
      new EndDefense(),
      new HealSingleUnit(),
    );
  }

  Action(Units: Unit[], currentUnit: string, targetId?: string): Unit[] {
    return this.healTeammates(Units, currentUnit, targetId);
  }
}
