const NomeDoHeroi = " BielHC";
let XpDoHeroi = 2000;
let ClassedoHeroi;

switch (true) {
    case  XpDoHeroi >= 0 && XpDoHeroi <= 1000:
        ClassedoHeroi = 'Ferro';
        break;
    case XpDoHeroi >= 1001 && XpDoHeroi <= 2000:
        ClassedoHeroi = 'Bronze';
        break;
    case XpDoHeroi >= 2001 && XpDoHeroi <= 5000:
        ClassedoHeroi = 'Prata';
        break;
    case XpDoHeroi >= 5001 && XpDoHeroi <= 7000:
        ClassedoHeroi = 'Ouro';
        break;
    case XpDoHeroi >= 7001 && XpDoHeroi <= 8000:
        ClassedoHeroi = 'Platina';
        break;
    case XpDoHeroi >= 8001 && XpDoHeroi <= 9000:
        ClassedoHeroi = 'Ascendente';
        break;
    case XpDoHeroi >= 9001 && XpDoHeroi <= 10000:
        ClassedoHeroi = 'Imortal';
        break;
    case XpDoHeroi > 10001:
        ClassedoHeroi= 'Radiante';
        break;
        default:
           ClassedoHeroi= 'Desconhecido'
}
console.log(`O Herói de nome ${NomeDoHeroi} está no nível de ${ClassedoHeroi}!`);
