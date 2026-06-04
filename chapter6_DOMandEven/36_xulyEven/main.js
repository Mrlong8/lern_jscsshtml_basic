console.log("Hello work")

const elm = document.getElementById("myBtn")

const clickMe = () => {
    console.log("You click me");
}

elm.addEventListener("click", clickMe)

console.log(elm)

// function clickMe() {
//     console.log("You click me")
// }

const elm2 = document.getElementById("mtBtn2")
const mytext = document.getElementById("myText")
const elmBack = document.getElementById("myBack")

const clickBack = () => {
    myText.innerHTML = "<strong>Chào bạn,</strong> <em>học lập trình với hoidanit!</em>"
}
const clickText = () => {
    mytext.innerHTML = "You click me"
}
elm2.addEventListener("click", clickText)
elmBack.addEventListener("click", clickBack)

const changeColor = document.getElementById("myBtn3");
const backColor = document.getElementById("myBtn4");

changeColor.addEventListener("click", () => {
    console.log("Click me")
    mytext.style.color = "red"
    mytext.style.backgroundColor = "green"
    alert("your mesage")
})

backColor.addEventListener("click", () => {
    console.log("Click me")
    mytext.style.color = "black"
    mytext.style.backgroundColor = "white"
})

const submit = document.getElementById("submit")
const input = document.getElementById("name")

const pri = document.getElementById("previ")
const previName = localStorage.getItem("long")

if (previName) {
    pri.innerHTML = `<b>${previName}</b>`
}

submit.addEventListener("click", () => {
    // alert("click me")
    // console.log(input.value)

    localStorage.setItem("test", "hello");
    console.log(localStorage.getItem("test"));

    localStorage.setItem("long", input.value);
    document.getElementById("metss").innerHTML = `<b>${input.value}</b>`
})