console.log("video 64")



const doSomeThing = () => {
    const a = 10, b = 0;
    if (b === 0) {
        throw new Error("Thực hiện chia cho 0")
    }
    return a / b;
}


try {
    doSomeThing();

} catch (error) {
    console.log("co lỗi ", error)
} finally {
    console.log("run final")
}