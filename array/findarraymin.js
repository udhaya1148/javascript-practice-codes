arr=[1,2,3,4];
min=arr[0];
for(i=1;i<=arr.length;i++){
    if(arr[i]<min){
        min=arr[i];
    }
}
console.log(min)