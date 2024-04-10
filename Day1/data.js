const sum = (a,b)=>{
    return a+b;
}
const diff = (a,b)=>{
    return a-b;
}
// console.log(sum(2,3))
// export {sum} we cannot write like this
// module.exports = sum;
// module.exports = diff;

// we can write in a single line
// module.exports = [sum, diff];
module.exports = {sum, diff} // this is the correct way to use as order doesn't matter here
