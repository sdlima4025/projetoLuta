const char = createKnight('Silvio');
const monster = createBigMonster();

stage.start(
    char, 
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')

);
