import {Unit} from './../Unit';

export abstract class DamageDealers extends Unit {
  private _damage: number;

  constructor(
    _name: string,
    _HP: number,
    _maxHP: number,
    _initiative: number,
    _isParalyzes: boolean,
    _damage: number,
  ) {
    super(_name, _HP, _maxHP, _initiative, _isParalyzes);
    this._damage = _damage;
  }

  get damage(): number {
    return this._damage;
  }
  set damage(value: number) {
    this._damage = value;
  }
}
