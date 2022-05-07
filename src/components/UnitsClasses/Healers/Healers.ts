import {Unit} from './../Unit';

export abstract class Healers extends Unit {
  private _heal: number;

  constructor(
    _name: string,
    _HP: number,
    _maxHP: number,
    _initiative: number,
    _isParalyzes: boolean,
    _heal: number,
  ) {
    super(_name, _HP, _maxHP, _initiative, _isParalyzes);
    this._heal = _heal;
  }

  get heal(): number {
    return this._heal;
  }
  set heal(value: number) {
    this._heal = value;
  }
}
