

//============ Simple Array Methods ==============
let arr = ['a','b','c','d','e','f']

//============================
//--------- 1. Slice ---------=
//============================

//lice  return new array after chaning
//do not effect to original array
console.log(arr.slice())
console.log(arr.slice(0))
console.log([...arr])  //we can also create new array like this

//sart Index
console.log(arr.slice(2)) //remove  a ,b
console.log(arr) //orignal ARray is same as old
console.log(arr.slice(4))

//end Index   (darmyaan wala ly gaa)
console.log(arr.slice(1,3)) //remove  a ,b
console.log(arr.slice(4,6))

//Negative  (0 -ve ni hotaa  1 saa start hota haa)
//-1 last elemnt of an array
console.log(arr.slice(-4)) //remove  a ,b
console.log(arr.slice(-4,-1)) //remove  a ,b
console.log(arr.slice(-4,-2)) //remove  a ,b

//remove last 2 elements
console.log(arr.slice(1,-2)) //remove  -2 last 2 elements


//============================
//--------- 2. Splice ---------=
//============================

//work same as slice but  its effect to Orginal Array
arr.splice(2)
//console.log(arr) //its effect the original Arry

arr.splice(-2)
//console.log(arr) //its effect the original Arry
arr.splice(1,2)

console.log(arr) //its effect the original Arry

//============================
//--------- 3. Reverse ---------
//============================
//rever will the array start and end point
//but its also mutate(change) the orginal Array  --- warning
let arr1 = ['l','m','n','o','p']

console.log(arr1.reverse())
console.log(arr1)


//============================
//--------- 3. concat ---------
//============================
arr = ['a','b','c','d','e','f']
let arr2 = ['l','m','n','o','p']
let letters = arr.concat(arr2)
console.log(letters)
//by seprade operator
console.log([...arr, ...arr2])


//============================
//--------- 4. join ---------
//============================
//join wil give string  output
console.log(arr.join(' = '))
console.log(arr.join(arr2))