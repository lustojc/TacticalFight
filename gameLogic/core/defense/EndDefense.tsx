import {IDefends} from '../../Interfaces/Defends';

export class EndDefense implements IDefends {
  defense(damage: number) {
    return damage;
  }
}
