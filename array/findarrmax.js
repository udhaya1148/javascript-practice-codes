arr=[45,1,5,2,6,46];
max=arr[0];
for(i=1;i<=arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);
