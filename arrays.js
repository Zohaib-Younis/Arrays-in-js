let nam =["Zohaib","Shahzaib","ali shoaib"];
let marks=[45,67,89,98,76];
let info=["Zohaib",21,"Lahore"]
console.log(nam.length,marks.length,info.length);
console.log(nam,marks,info);
console.log(nam[0]);

    //using for loop

for (let indx=0; indx<marks.length;indx++){
    console.log(`index of ${indx} =`,marks[indx]);
}

// using for off loop

for(let element of marks){
    console.log(element);
}

//using for in loop

let city=["Lahore","islamabad","kirachi"];
for(let element in city){
    console.log(city[element]);
}

                //Practice Question

let marksOfStudent=[85,97,44,37,76,60];
let sum=0;
let average=0;
for(let i=0;i<marksOfStudent.length;i++){
    sum=sum+marksOfStudent[i];
}
average=sum/6;
console.log(`Sum is =`,sum);
console.log(`So the average result is =`,average);  


               //Practice question 2

let price=[250,645,300,900,50];

for(let i=0;i<price.length;i++){
    let offer = price[i]/10;
    price[i]=price[i]-offer;
}
console.log(`Value after offer ${price}`);

