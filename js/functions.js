const defaultCharacter = {
    name: '',
    life:1,
    maxLife:1,
    attack:0,
    defense: 0
}

const creatKnight = (name) => {
    return {
        ...defaultCharacter,
        name,
        life:100,
        maxLife: 100,
        attack: 10,
        defense: 8
    }
}

const creatSorcerer = (name) => {
    return {
        ...defaultCharacter,
        name,
        life: 50,
        maxLife: 14,
        attack: 14,
        defense: 3
    }
}
const creatLittleMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Little Monster',
        life: 40,
        maxLife: 14,
        attack: 4,
        defense: 4
    }
}

const creatBigMonster = () => {
    return {
        ...defaultCharacter,
        name: 'Big Monster',
        life: 120,
        maxLife: 120,
        attack: 16,
        defense: 6
    }
}
