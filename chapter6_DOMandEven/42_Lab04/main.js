const ipName = document.getElementById("ipname")
const ipPass = document.getElementById("ippass")

const submit = document.getElementById("sub")

submit.addEventListener("click", () => {
    if (ipName.value === "buixuanlong@gmail.com" && ipPass.value === "123456") {
        alert("Đăng Nhập Thành Công")
        window.location.href = "../36_xulyEven/main.html"
    } else {
        alert("Tài Khoản hặc mật khẩu sai")
        ipName.style.borderColor = "red"
        ipPass.style.borderColor = "red"
    }
})

