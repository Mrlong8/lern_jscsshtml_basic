

console.log("Thuc Hanh 01")

const ipName = document.getElementById("ipname")
const btnSave = document.getElementById("btnsave")

const getRD = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

if (btnSave) {
    btnSave.addEventListener("click", () => {
        const users = localStorage.getItem("users");

        const user = {
            id: getRD(1, 100000000),
            name: ipName.value
        };

        if (users) {
            const currentUsers = JSON.parse(users)
            // Chuyển JSON về Array

            currentUsers.push(user)
            localStorage.setItem("users", JSON.stringify(currentUsers));
            // Biến array thành chuỗi JSON.
        } else {
            localStorage.setItem("users", JSON.stringify([user]));
        }


        window.location.href = "../BaiThucHanh01/main.html"
    });

}

const fetchData = (todoList) => {

    // insert data to html
    const tBody = document.querySelector("#todolist tbody")
    if (tBody) {
        if (todoList && todoList.length) {
            todoList.forEach((user, index) => {
                tBody.innerHTML += `
             <tr>
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td><button 
                    data-id=${user.id} 
                    class = "btn-delete"
                >
                Xoa
                </button></td>
            </tr>
    `
            });
        }
    }


}


const generateTodoTable = () => {
    const todoStr = localStorage.getItem("users");

    if (todoStr) {
        const todoList = JSON.parse(todoStr)
        console.log(todoList)
        fetchData(todoList)
    }
}


generateTodoTable();



const handeleDeleteTodo = (id) => {
    const todoStr = localStorage.getItem("users");
    if (todoStr) {

        const todoList = JSON.parse(todoStr)
        const newTodo = todoList.filter((users, index) => users.id + "" !== id)
        console.log(todoList, id)
        localStorage.setItem("users", JSON.stringify(newTodo))
        window.location.reload();
    }
}


const deleteBtn = document.querySelectorAll(".btn-delete")

if (deleteBtn) {
    deleteBtn.forEach((btn, index) => {
        console.log(btn, index)
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            handeleDeleteTodo(id)
        })
    })
}

