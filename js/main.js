let prenom;
let classe =[];

for( let i = 0; i<10; i++){
    prenom= prompt("Donne moi un nom!")
    classe.push(prenom);
    console.log(`Bonjour ${classe[i]}`);

}
// EXO2