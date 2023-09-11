let arr=[1,2,3,4,5,6,7,8,9]

// map,filter,find, some,every,reduce
// looping functions
// each function returns some value

let mapExe=arr.map((data,index)=>{ 
  return data*2
}) 

console.log(mapExe)

// filter return the every filtered value
let filterExe= arr.filter((d,i)=>{
  return d%2 !==0
})

console.log(filterExe)

//find only return the first element value that staisfies the condition

let findExe=arr.find((data,i)=>{
  return data % 2 !==0
})

console.log(findExe)


// some return boolean of wheather one of the element in the array 
// satisfies the condition

let someExe= arr.some((data,i)=>{
  return data>3
})
console.log(someExe)

// every return boolean weather each of the element in the array 
// satisfies the condition

let everyExe= arr.every((data,i)=>{
  return data>3
})
console.log(everyExe)

// reduce takes the previous value and the current value
let redu=arr.reduce((preval,d)=>{
  return preval+d
},20)

console.log(redu)
