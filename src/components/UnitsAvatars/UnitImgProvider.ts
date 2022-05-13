let Archimage = require('../../assets/img/UnitsImg/Archimage.jpeg');
let Bandit = require('../../assets/img/UnitsImg/Bandit.jpeg');
let Centaur = require('../../assets/img/UnitsImg/Centaur.jpeg');
let ElfArcher = require('../../assets/img/UnitsImg/ElfArcher.png');
let Skeleton = require('../../assets/img/UnitsImg/Skeleton.jpeg');
let SkeletonMage = require('../../assets/img/UnitsImg/SkeletonMage.jpeg');
let Bishop = require('../../assets/img/UnitsImg/Bishop.webp');
let Monk = require('../../assets/img/UnitsImg/Monk.jpeg');
let Sirena = require('../../assets/img/UnitsImg/Sirena.webp');

export const UnitAvatars = (cardName: string) => {
  switch (cardName) {
    case 'Archimage':
      return Archimage;
    case 'Bandit':
      return Bandit;
    case 'Centaur':
      return Centaur;
    case 'Elf Archer':
      return ElfArcher;
    case 'Skeleton':
      return Skeleton;
    case 'Skeleton Mage':
      return SkeletonMage;
    case 'Bishop':
      return Bishop;
    case 'Monk':
      return Monk;
    case 'Sirena':
      return Sirena;
    default:
      return null;
  }
};
