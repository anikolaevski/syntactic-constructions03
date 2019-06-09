// eslint-disable-next-line import/prefer-default-export
export function setUpAttacks(items, shield = true) {
  const result = [];

  // eslint-disable-next-line func-names
  const healthAttack = function (attack) {
    if (this.health >= attack) {
      this.health -= attack;
    } else {
      this.health = 0;
    }
  };

  if (shield) {
    // eslint-disable-next-line func-names
    const healthAttackAll = function (attack) {
      const coef = items.filter(item => item.health > 0).length;
      if (coef > 0 && this.health > 0) { // cannot attack dead character
        const attackVal = attack / coef;
        const roundVal = Math.floor(attackVal);
        const rest = (attackVal - roundVal) * coef;
        items.forEach(item => healthAttack.apply(item, [roundVal]));
        if (rest > 0) {
          healthAttack.apply(this, [rest]);
        }
      }
    };
    items.forEach(item => result.push(healthAttackAll.bind(item)));
  } else {
    items.forEach(item => result.push(healthAttack.bind(item)));
  }

  return result;
}
