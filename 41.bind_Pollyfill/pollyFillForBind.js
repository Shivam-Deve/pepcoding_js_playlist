Function.prototype.myBind = function (object, ...args) {
    let parentFunc = this // "this here pointing to parent function"
    return function (...args2) {
        // since this function will have a normal call so "this" here will point to global object
        parentFunc.apply(object, [...args, ...args2])
    }
}

// let func = parentFunc.bind(object, ...args)
// func(...args2)


let person1 = {
    name: "Shivam",
    city: "gkp",
    getInfo: function () {
        console.log(`${this.name} is from ${this.city}`)
    }
}
let person2 = {
    name: "Rishi",
    city: "Varansi"
}

function printNameWithDesignation(designation, company) {
    console.log(`${this.name} is ${designation} at`, (company != undefined ? company : "not known"))
}


console.log("line 31")
let print = printNameWithDesignation.myBind(person1, "Software Engineer", "pepcoding")
print()

// OR

print = printNameWithDesignation.myBind(person1)

console.log("line 39")
print("Software Engineer", "pepcoding")