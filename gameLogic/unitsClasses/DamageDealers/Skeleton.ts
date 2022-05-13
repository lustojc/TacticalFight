import {v4 as uuidv4} from 'uuid';

import {EndDefense} from '../../core/defense/EndDefense';
import {Attack} from '../../unitActions/Attack';
import {DamageDealers} from './DamageDealers';
import {MeleeAttack} from '../../unitActionsType/MeleeAttack';
import {Unit} from '../Unit';

export class Skeleton extends DamageDealers {
  constructor() {
    super(
      uuidv4(),
      'Skeleton',
      100,
      100,
      50,
      false,
      25,
      new Attack(),
      new EndDefense(),
      new MeleeAttack(),
    );
  }

  Action(Units: Unit[], currentUnit: string, targetId?: string): Unit[] {
    return this.attack(Units, currentUnit, targetId);
  }
}
