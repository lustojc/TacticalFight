import {Unit} from '../../unitsClasses/Unit';

export const getMeleeTarget = (
  enemies: Unit[],
  targetId: string | undefined,
) => {
  const target = enemies.filter(unit => unit.id === targetId);

  return target;
};
