const obj = {
    name: "zym",
    age: 19,
    special: ["足球", "篮球", "排球"],
    family: {
        name2: "zym2",
        age2: 20
    },
    trial: [
    {
        obj1:"1"
    },
    {
        obj2:"2"
    }
    ],
    trial2: {
        arr1:["数组内容"]
    }
    
}

let dObj = {}

function deepClone(newObj, oldObj) {
    for (let i in oldObj) {
        if (oldObj[i] instanceof Array) {
            newObj[i] = []
            deepClone(newObj[i], oldObj[i])
        }
        else if (oldObj[i] instanceof Object) {
            newObj[i] = {}
            deepClone(newObj[i], oldObj[i])
        }
        else {
            newObj[i] = oldObj[i]
        }
    }
}

deepClone(dObj, obj)

console.log(dObj);

