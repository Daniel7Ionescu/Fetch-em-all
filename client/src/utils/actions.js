export function attack (attacker, defender) {
    // ((((2/5+2)*B*60/D)/50)+2)*Z/255

    const random = Math.floor(Math.random() * (255 - 217) + 217);
    let damage = (((( 2 / 5 + 2 ) * attacker.attack * 60 / defender.defense) / 50) + 2) * random / 255;

    return damage;

}

export function heal (attacker) {
    // 
    const random = Math.floor(Math.random() * (10 - 5) + 5);
    // let regen = Math.floor((attacker.attack / 2) + random);
    let regen = 10;
    return regen;
}

