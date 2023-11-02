// // console.log(`hi there`);

import { LinkedList } from "./LinkedList";

// // const logSomething=()=>{
// //   console.log(`something`);
// // };
// // logSomething();

// // bubble sort

// class Sorter{
//   // collection: number[];
// //  write for string collection: string
//   constructor(public collection: number[]| string | linkedList){}

//   sort(): void {
//     // const length = this.collection.length;
//    const{length} = this.collection;

//    for(let i=0;i<length;i++){
//     for(let j=0;j<length-i-1;j++){
//       if(this.collection[j]>this.collection[j+1]){
//         const leftHand = this.collection[j];
//         this.collection[j] = this.collection[j+1];
//         this.collection[j+1] = leftHand;
//       }
//     }
//    }

// }
// }

// const sorter = new Sorter([10,3,-5,0]);
// sorter.sort();
// console.log(sorter.collection);

// import { NumbersCollection } from "./NumbersCollection";

 import { Sorter } from "./Sorter";

 

// const numbersCollection=new NumbersCollection([10,3,-5,0]);
// const sorter=new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const CharactersCollection= new CharactersCollection();
// CharactersCollection.sort();
// console.log(CharactersCollection.data);
// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);

const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();