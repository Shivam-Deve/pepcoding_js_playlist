let student = {
    name: "Shivam",
    address: {
        city: "GKP",
        state: {
            pin: 274001,
            short: "UP"
        }

    },
    courses: {
        frontEnd: ['js', 'react'],
        backEnd: ['node', 'mongodb']
    }
}
function flattenObject(obj, parent, res) {
    for (let key in obj) {
        prop = parent ? parent + "_" + key : key;
        if (typeof obj[key] == 'object' && !Array.isArray(obj[key])) {
            flattenObject(obj[key], prop, res)
        } else {
            res[prop] = obj[key]
        }
    }
}






let res = {}
flattenObject(student, "", res);
console.log(res)
