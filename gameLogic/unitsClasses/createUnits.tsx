import {Archimage} from './DamageDealers/Archimage';
import {Bandit} from './DamageDealers/Bandit';
import {Centaur} from './DamageDealers/Centaur';
import {ElfArcher} from './DamageDealers/ElfArcher';
import {Skeleton} from './DamageDealers/Skeleton';
import {SkeletonMage} from './DamageDealers/SkeletonMage';
import {Bishop} from './Healers/Bishop';
import {Monk} from './Healers/Monk';
import {Sirena} from './Paralizers/Sirena';

export class createUnits {
  public static createUnit(unitName: string) {
    switch (unitName) {
      case 'Skeleton':
        return new Skeleton();
      case 'Centaur':
        return new Centaur();
      case 'Elf Archer':
        return new ElfArcher();
      case 'Bandit':
        return new Bandit();
      case 'Skeleton Mage':
        return new SkeletonMage();
      case 'Archimage':
        return new Archimage();
      case 'Monk':
        return new Monk();
      case 'Bishop':
        return new Bishop();
      case 'Sirena':
        return new Sirena();
      default:
        throw new Error('No such Unit');
    }
  }
}
