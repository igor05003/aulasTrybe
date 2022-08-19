function mageDmg(obj) {
  if (obj.mana < 15) mageSkills.damage = 'Sem mana!'
  const mageSkills = {
    damage: 0,
    mana: 0,
  };
  const minMa = Math.ceil(45);
  const maxMa = Math.floor(90);
  const dmg = Math.floor(Math.random() * (maxMa - minMa +1)) + minMa;
  mageSkills.damage = dmg;
  mageSkills.mana += 15;
  obj.mana -= 15;
  return mageSkills
}

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: mageDmg,
};

console.log(mage.damage(mage));
console.log(`Mana: ${mage.mana}`);

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: () => {
    const minWa = Math.ceil(30);
    const maxWa = Math.floor(60);
    return Math.floor(Math.random() * (maxWa - minWa + 1)) + minWa;
  },
};

console.log(`Dano guerreiro: ${warrior.damage()}`)
  
const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: () => {
    const min = Math.ceil(15);
    const max = Math.floor(50);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};

console.log(`Dano dragão: ${dragon.damage()}`);

function battle(obj) {
  let dgHp = battleMembers.dragon.health;
  let waDmg = warrior.damage();
  dgHp -= waDmg;
  battleMembers.warrior.damage = waDmg
  return obj;
}

function mageTurn() {
  let dragonHp = battleMembers.dragon.health;
  const maData = battleMembers.mage;
  const maMana = maData.mana;
  const maDmg = mage.damage().damage;
  dragonHp -= maDmg;
  maMana += 15;
  maData.damage = maDmg;
  return battleMembers.mage.health;
}

function dragonTurn() {
  const waHp = battleMembers.warrior.health;
  const maHp = battleMembers.mage.health;
  const dgDmg = dragon.damage();
  waHp -= dgDmg;
  maHp -= dgDmg;
  battleMembers.dragon.damage = dgDmg;
  return battleMembers.dragon.health
}

const gameActions = {
  warrior: battle,
  mage: mageTurn,

}

const battleMembers = { 
  mage: {damage: 0, mana: 125, health: 130},
  warrior: {damage: 0, health: 200}, 
  dragon: {damage: 0, health: 350}, 
};