/*
setTimeout(main, 3000);

function main(){
    console.log("main is called")
}
*/


/* setTimeoutPromisified */
// function waitFor3S(func1){
//     setTimeout(func1, 5000)
// }

// function setTimeoutPromisified(func1){
//     return new Promise(waitFor3S)
// }

// function main(){
//     console.log("main is called")
// }

// setTimeoutPromisified().then(main)


/* Callback Hell */
// setTimeout(function(){
//     console.log("Hi");
//     setTimeout(function(){
//         console.log("Hello");
//         setTimeout(function(){
//             console.log("Hello There");
//         }, 5000)
//     }, 3000)
// }, 1000)


/* Async await syntax*/
function setTimeoutPromisified(ms){
    return new Promise(function (resolve){
        setTimeout(resolve, ms);
    });
}
async function solve(){
    await setTimeoutPromisified(1000);
    console.log("Hi");
    await setTimeoutPromisified(3000);
    console.log("Hello");
    await setTimeoutPromisified(5000);
    console.log("Hello There");
}
solve();