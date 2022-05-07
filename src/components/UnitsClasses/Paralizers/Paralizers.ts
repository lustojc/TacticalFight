import {Unit} from './../Unit';

export abstract class Paralizers extends Unit {

  constructor(
    _name: string,
    _HP: number,
    _maxHP: number,
    _initiative: number,
    _isParalyzes: boolean,

  ) {
    super(_name, _HP, _maxHP, _initiative, _isParalyzes);
  }

}
