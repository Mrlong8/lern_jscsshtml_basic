
console.log("Thuc Hanh 02")

const fetchBlog = async () => {
    const res = await fetch("http://localhost:8000/blogs")
    const data = await res.json();
    console.log("Blogs : ", data)

    //insert data to html
    const tBody = document.querySelector("#blogs tbody")
    if (tBody) {
        if (data && data.length) {
            data.forEach((blog, index) => {
                tBody.innerHTML += `
             <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
                <td><button 
                    class = "delete-blog"
                    data-id = "${blog.id}"
                >
                Xóa
                </button></td>
            </tr>
    `
            });
        }
    }

}

const handleAddNewBlog = () => {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const content = document.getElementById("content");

    const saveBlogBtn = document.getElementById("saveBlog")

    saveBlogBtn.addEventListener("click", async () => {
        console.log(title.value, author.value, content.value)

        // call api to create a new blog
        const rawResponse = await fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                author: author.value,
                content: content.value
            })
        });
        const data = await rawResponse.json();
        adNewRowToEnd(data);
        console.log("Phản hồi  : ", data)
    })
}

const adNewRowToEnd = (blog) => {
    const tableBody = document.querySelector('#blogs tbody');
    // Tạo phần tử dòng mới
    const newRow = document.createElement('tr');
    // Gán HTML cho dòng
    newRow.innerHTML = `
            <tr>
                <td>${blog.id}</td>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.content}</td>
               <td><button 
                    class = "delete-blog"
                    data-id = "${blog.id}"
                >
                Xóa
                </button></td>
            </tr>
            `;
    // Thêm dòng vào cuối bảng
    tableBody.appendChild(newRow);

    // gán sự kiện onClick cho row vừa tạo 
    const btn = document.querySelector(`[data-id = "${blog.id}"]`)
    btn.addEventListener("click", async () => {
        const id = btn.getAttribute("data-id")

        // call api to delete a blog
        const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                author: author.value,
                content: content.value
            })
        });
        const data = await rawResponse.json();
        // delete html row
        const row = btn.closest('tr');
        row.remove();
    })
}

const handeleDeleteBtns = () => {
    const btns = document.querySelectorAll(".delete-blog");

    if (btns) {
        btns.forEach((btn, index) => {

            btn.addEventListener("click", async () => {
                const id = btn.getAttribute("data-id")

                // call api to delete a blog
                const rawResponse = await fetch(`http://localhost:8000/blogs/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: title.value,
                        author: author.value,
                        content: content.value
                    })
                });
                const data = await rawResponse.json();
                // delete html row
                const row = btn.closest('tr');
                row.remove();
            })
        })
    }
}

fetchBlog().then(() => {
    handeleDeleteBtns();
});
handleAddNewBlog();

