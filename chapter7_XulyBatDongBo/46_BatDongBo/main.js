console.log("helllo")

// console.log("1")

// async
// setTimeout(() => {
//     console.log("2")
// }, 5000)

// console.log("3")

const myPromise = () => {
    return new Promise((resole, reject) => {
        setTimeout(() => {
            console.log("2 with promise")
            resole("Hoi xuan Long")
        }, 2000)
    })
}

const test = myPromise();
console.log("test", test)

console.log("======================= with promit blow =================")
console.log("1")
myPromise().then(data => {
    console.log("dater: ", data)
    console.log("3")
})