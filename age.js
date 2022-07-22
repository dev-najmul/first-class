

let name = prompt('Your name');
let age = prompt('Age plz');
let gender =prompt('Gender');


if( age >= 18 && age < 60 && gender == 'female'){
    
      console.log(`Congratulation Apu ${ name } apnr biyar boys hoise. Biyar daoat dien.`);
}else if( age >= 18 && age < 60 && gender == 'male'){
      console.log(`Congratulation vai ${ name } apnr biyar boys hoise. Biyar daoat dien.`);

}else if( age > 60 && gender == 'female'){
      console.log('Anti apni to buri hoiya gasen')

}else if( age > 60 && gender == 'male'){
      console.log('Uncle apni to buri hoiya gasen')

}else{
      console.log(`${ name } tumi akhono soto choklet nia gore fire jao and doya kor ${ 18 - age} bosor wait koro`);
}