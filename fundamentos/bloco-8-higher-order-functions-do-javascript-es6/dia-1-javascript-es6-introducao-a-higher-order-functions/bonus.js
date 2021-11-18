const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.round(Math.random() * (dragon.strength - 15)) + 15;

const warriorDamage = () => Math.round(Math.random() * ((warrior.strength * warrior.weaponDmg) - warrior.strength)) + warrior.strength;

const mageDamage = () => ({
  damage: Math.round(Math.random() * ((mage.intelligence * 2) - mage.intelligence)) + mage.intelligence,
  mana: mage.mana >= 15 ? -15 : 'Não possui mana suficiente',
});

const gameActions = {
  warriorTurn: (callback) => {
    const dmg = callback();
    dragon.healthPoints -= dmg;
    warrior.damage = dmg;
  },
  mageTurn: (callback) => {
    const dmgMana = callback();
    dragon.healthPoints -= dmgMana.damage;
    if (mage.mana >= 15) {
      mage.damage = dmgMana.damage;
      mage.mana += dmgMana.mana;
    } else {
      mage.damage = dmgMana.mana;
    }
  },
  dragonTurn: (callback) => {
    const dmg = callback();
    warrior.healthPoints -= dmg;
    mage.healthPoints -= dmg;
    dragon.damage = dmg;
  },
  update: () => console.log(battleMembers),
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
gameActions.update();
