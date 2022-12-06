//API = Application programming interface
//Js o n = javascript object notation
const user = {id:11, Name:'suraiya eva',job: 'student'};
const converted = JSON.stringify(user)
console.log(converted);

const market = {
    name: 'Boshundhora',
    address:'Rajshahi',
    product:['Laptop','Mobile','Watch'],
    owner:{
        name:'Eva',
        profession: 'Shop owner'
    },
    isGood: true,
}
//console.log(market);
const stringifyMarket = JSON.stringify(market)
const convertObject = JSON.parse(stringifyMarket);

console.log(stringifyMarket);
console.log(convertObject.owner);