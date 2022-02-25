let person1 = {
    name: "John",
    age: 21,
    showData: function () {
        console.log(this.name + this.age);
    },
};
let person2 = {
    name: "Shivam",
};
person2.__proto__ = person1; // prototypal inheritance
person2.showData();