export class Unit {
  constructor(
    private _name: string,
    private _HP: number,
    private _maxHP: number,
    private _initiative: number,
    private _isParalized: boolean,
  ) {}

  get name(): string {
    return this._name;
  }

  get hp(): number {
    return this._HP;
  }

  set hp(value: number) {
    this._HP = value;
  }

  get maxHP(): number {
    return this._maxHP;
  }

  set maxHP(value: number) {
    this._maxHP = value;
  }

  get initiative(): number {
    return this._initiative;
  }

  get isParalized(): boolean {
    return this._isParalized;
  }

  set isParalized(value: boolean) {
    this._isParalized = value;
  }

}
