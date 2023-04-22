// function createLocaStorage(key) {
//     const store = JSON.parse(localStorage.getItem(key)) ?? {}

//     const save = () => {
//         localStorage.setItem(key, JSON.stringify(store))
//     }
//     const create = {
//         get(key) {
//             return store[key]
//         },
//         set(key, value) {
//             store[key] = value;
//             save();
//         },
//         remove(key) {
//             delete store[key]
//             save()
//         }
//     }

//     return create;
// }

// const loca = createLocaStorage("fullname")
// console.log(loca.get("fullname"))
// loca.set('fullname', "duong ba xinh")
// loca.remove('fullname')
// localStorage.removeItem("fullname")
// let count = 0;
// let id;
// const coutn = () => {
//     id = setInterval(() => {
//         count++;
//         console.log(count)
//     }, 2000)
// }

// function checkCount() {
//     if (count > 5) {
//         console.log("kjkdjf")
//         clearInterval(id)
//     }
// }
// setInterval(checkCount, 2000)

// coutn()
let visible = 1;
const setTimeoutw = () =>
    setTimeout(() => {
        if (visible < 3) {
            visible += 1;
            console.log(visible)
        } else {
            visible = 1
        }
    }, 1000);

setTimeoutw()