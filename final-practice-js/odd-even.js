const even=[];
const odd =[];
for(i=1;i<=100;i++){
    if(i % 2 === 0){
        even.push(i);
    }
    else{
        odd.push(i);
    }
}
console.log("even :",even);
console.log("odd:",odd);
