
//________________ Foreach + Map __________________
console.log("\n==== Map ====")
const currencies = new Map([
        ['PKR','Pakistan Currency'],
        ['USD','United States doller'],
        ['EUR','Euro'],
        ['GBP','Pound sterling'],
    ])
    
    
    currencies.forEach(function(value,key,map){
        console.log(`${key} : ${value}`);
    });

//________________ Foreach + Set __________________
console.log("\n==== Set ====")
const uniqueCurrencies = new Set(['USD','PKR','USD','EUR','GBP','GBP','PKR'])
//for sets  value and key is similar
// _  variable that is not nessory 
uniqueCurrencies.forEach(function(value,_,map){
        //console.log(`${key} : ${value}`);
        console.log(`${_} : ${value}`);
});