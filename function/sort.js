let students = [
  { name: "Ram", marks: 85 },
  { name: "Sam", marks: 70 },
  { name: "John", marks: 95 },
  { name: "Balu", marks: 0}
];

// console.log(students.sort((a,b)=> a.marks - b.marks)); //accending

for(let i=0;i<students.length;i++){
    for(let j=0; j<students.length-i-1;j++){
        if(students[j].marks>students[j+1].marks){
            temp=students[j].marks;
            students[j].marks = students[j+1].marks;
            students[j+1].marks = temp;
        }
    }
}
console.log(students)