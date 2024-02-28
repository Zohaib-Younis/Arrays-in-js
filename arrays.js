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
console.log(`Original values of items = ${price}`)
for(let i=0;i<price.length;i++){
    let offer = price[i]/10;
    price[i]=price[i]-offer;
}
console.log(`Value after offer 10 persent off = ${price} `);

             
                // Array Methods

   // push(); method add to end of array
 let foodItems = ["potato","tomato","ginger","aplle"];
 console.log(foodItems);

 // will be add at end 
 foodItems.push("Chips","paneer","burgur");
 console.log(foodItems);



                // Delete from end and return
    
let vages=["tomato","potato","ginger","onion"];

vages.pop();
console.log(vages);  // onion will be deleted from end of the array




let deletedItem=vages.pop();
console.log(`Deleted:`,deletedItem);
           
// toString();
console.log(vages.toString()); 


let markss=[35,567,78,54];
marks.toString();
console.log(marks);



//concate 

let heros=["thor","spiderman","ironman"];

let dc_heros=["Supermna","Salman"];

let hero=heros.concat(dc_heros);

heros.unshift("akshay"); 
console.log(hero);

// slice method not change in orignal array

let antman=["ant man","ali","rakha"];
console.log(antman);
console.log(antman.slice(1,3));


//splice method is used to change in orignal array add delete and re-place

let arr=[1,2,3,4,5,6,7];
arr.splice(2,2,101,102);
console.log(arr);

let compnies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(compnies.splice(2, 1, "Ola"));

compnies.push("Amazon");



