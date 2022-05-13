import {IDefends} from '../../Interfaces/Defends';

export class StartDefense implements IDefends {
  defense(damage: number): number {
    return Math.floor(damage / 2);
  }
}
