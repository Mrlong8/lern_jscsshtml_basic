console.log("Vodeo 65")

const greeting = (name, long) => {
    console.log("Xin chao", name)
    long()
}

const hello = () => {
    console.log("learn callback")
}

greeting("Long", hello)

