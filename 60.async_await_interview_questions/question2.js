// success callback vs failure callback
/*
    .then(successCallBackFn,failureCallBackFn)

*/

let p = new Promise((resolve, reject) => {
    reject(new Error("Some error"));
    setTimeout(() => {
        reject(new Error("some error"))
    }, 1000)
    reject(new Error("some error"))
})

p.then(null, (err) => {
    console.log(1);
    console.log(err);
}).catch((err) => {
    console.log(2)
    console.log(err);
})