// method of push 
const arr = [1,2,3,4];
arr.push(5);
console.log(arr);

// method of pop 
const arr2 = [1,2,3];
arr2.pop();
console.log(arr2);

// method of shift 
const arr3 = [1,2,3,4];
arr3.shift();
console.log(arr3);

// method of unshift 
const arr4 = [1,2,3,4,5];
arr4.unshift(0);
console.log(arr4);

// method of concat 
const arr5 = ['a','b','c'];
conCat = arr5.concat('d');
console.log(conCat);

// method of join 
const arr6 = ['a','b','c'];
const joinig = arr6.join('-');
console.log(joinig);

// method of slice 
const arr7 = ['a','b','c','d','e','f'];
const slicing = arr7.slice(2 , 4);
console.log(slicing);

// method of indesOf 
const arr8 = ['a','b','c','d','e'];
const getIndexOf = arr8.indexOf('c');
console.log(getIndexOf);

// method of includes 
const arr9 = ['a','b','c'];
const getIncludes = arr9.includes('c');
console.log(getIncludes);

const arr10 = [3,5,6,8];
const getFind =arr10.find((n)=>n%2===0);
console.log(getFind);