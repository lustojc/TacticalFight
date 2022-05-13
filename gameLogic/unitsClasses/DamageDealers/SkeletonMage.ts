import {v4 as uuidv4} from 'uuid';

import {MassAttack} from '../../unitActionsType/MassAttack';
import {EndDefense} from '../../core/defense/EndDefense';
import {Attack} from '../../unitActions/Attack';
import {DamageDealers} from './DamageDealers';
import {Unit} from '../Unit';

export class SkeletonMage extends DamageDealers {
  constructor() {
    super(
      uuidv4(),
      'Skeleton Mage',
      50,
      50,
      40,
      false,
      20,
      new Attack(),
      new EndDefense(),
      new MassAttack(),
    );
  }
  Action(Units: Unit[], currentUnit: string): Unit[] {
    return this.attack(Units, currentUnit);
  }
}
