// rest  argument is array like object Array.from is turning argument to array
function sum(){
    const args =Array.from(arguments);
    return args.reduce((sum,val)=>{
        return sum+val;
    });
}

const max =function(){
    const args =Array.from(arguments);
    return args.reduce((max,currVal)=>{
        return currVal>max?currVal :max;
    });
};

// rest operator can only be used of last argument and turn the last argument to array
// const sum=(...nums) => {
//     if (!nums.length) return undefined;
//     return nums.reduce((sum,n)=>sum+n);

// };

function makeFamily(parent1,parent2,...kids){
    return {
        parent :[parent1,parent2],
        children : kids.length?kids:0
    };
}
const filterByType=(type,...vals)=>{
    return vals.filter((v)=>typeof v===type);
};
// Colone Obj to a new obj by using spread operator
const tea ={
    type: 'Onlong',
    name:'dsafasd',
    origin: 'CHN',
};

// Copy to a new obj
const tea2 ={...tea};

const teaData={
    steeptime:'30a',
    brewtemp:'175',
    origin:'Japan'
};

const teaPr= {...tea, price:23 };
const fullTea={...tea,...teaData};
// orders matters
// Spread is not the deep clone( only shallow copy, one level deep)
//Cloned Obj or array has the different reference, but the nested obj or array refer to the same
function filterOutOdds(){
    var nums =Array.prototype.slice.call(arguments);
    return nums.filter(function(num){
        return num%2===0
    });
}
// const filterOutOdds=(...args)=>args.filter(v=>v%2===0)

const findMin=(...arg)=>Math.nin(...args)
const mergeObjects = (arg1,arg2)=>({
    ...arg1,...arg2
})
// need to remember!
const doubleAndReturnArgs=(arr,...args)=>[
    ...arr,...args.map(v=>v*2)]
// const doubleAndReturnArgs=(arr,...args)=>{
//     return [...arr,...args.map(v=>v*2)]
// }
const removeRandom=item=>{
    let idx=Math.floor(Math.random()*item.length);
    return [...item.slice(0,idx),...item.slice(idx+1)];
}
//...item.slice(idx+1) meaning 

const extended=(arr1,arr2)=>{
    return [...arr1,...arr2]
}


// ///** Return a new object with all the keys and values
// from obj and a new key/value pair 
//Opt1
const addKeyVal = (obj, key, val) => {

    // OPTION 1
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  
    // OPTION 2 (uses an object enhancement you'll see in the next unit)
    // return { ...obj, [key]: val };
  }

  /** Return a new object with a key removed. */

const removeKey = (obj, key) => {

    // OPTION 1
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
  
    // OPTION 2 (uses an object enhancement you'll see in the next unit)
    // ({ [key]: undefined, ...obj } = obj);
    // return obj;
  }

  /** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  }

  /** Return a new object with a modified key and value. */

const update = (obj, key, val) => {

    // OPTION 1
  
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
  
    // OPTION 2 this uses an object enhancement you'll see in the next unit)
    // return { ...obj, [key]: val };
  }