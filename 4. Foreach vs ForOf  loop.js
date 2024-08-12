//========================================================
//--------------------- forEach Loop ------------------
//========================================================
//for each smilar like  forOf loop

//let i have bank transaction
const movements = [200,450,-400,3000,-650,-130,70,1300]

//deposit means account me pasaa dalanaaa
//withdrwan means  account s passs nikalnaa

//------------ For Of lop ----------------
console.log("For of Loop ======")
for(const [i,movement] of movements.entries()){
    if(movement > 0){
        console.log(`You deposit #${i+1} ${movement} in your Account`);
    }
    else{
        console.log(`You withDraw #${i+1} ${Math.abs(movement)} in your Account`);
    }
}

console.log("\nFor of Loop ======")

//------------ forEach Of lop ----------------
//Foreach is  Very Clean pattern
//Foreach is  Higher Order function which accept callback function
movements.forEach(function(mov,ind,array){
    console.log(array,'return array which is being used')
    if(mov > 0){
        console.log(`You deposit #${ind+1} ${mov} in your Account`);
    }
    else{
        console.log(`You withDraw #${ind+1} ${Math.abs(mov)} in your Account`);
    }
})