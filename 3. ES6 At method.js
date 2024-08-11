//============================
//--------- At method ---------=
//============================
let arr = [25,55,222]

console.log(arr[0])
console.log(arr.at(0))

//get last element of array
console.log(arr[arr.length-1])
console.log(arr.slice(-1)[0])

//easy then all
console.log(arr.at(-1))

//============================
//------ At method with String ---------
//============================
let name = "PK s";

console.log(name.at(0))
console.log(name.at(1))
console.log(name.at(-1)) //last carcter

console.log("Pakistan".at(-1)) //last
