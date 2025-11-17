function counter(){
    let count = 0;

    function printCounts(){
        count++;
        console.log(count);
    }

    return printCounts;
}

let myCounts = counter();
myCounts();
myCounts();