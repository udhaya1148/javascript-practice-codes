let arr=[1,3,45,2,65];
let max=arr.reduce((a,b)=>{
  return  a>b?a:b
})
console.log(max)