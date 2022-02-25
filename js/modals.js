
export function modalEdit() {

    const modalEdit = document.querySelector(".editModal");

    const edit = document.querySelectorAll(".table__cellEdit.icon");
    edit.forEach(item => {
        item.addEventListener("click", (e) => {
            modalEdit.style.display = "flex";
        });
    });
    const close = document.querySelectorAll(".editModal__close");
    close.forEach(item => {
        item.addEventListener("click", (e) => {
            modalEdit.style.display = "none";
        });
    });
}


export function modalDelete() {

    const modalDelete = document.querySelector(".deleteModal");

    const delet = document.querySelectorAll(".table__cellDelete.icon");
    delet.forEach(item => {
        item.addEventListener("click", (e) => {
            modalDelete.style.display = "flex";
        });
    });

    const close = document.querySelectorAll(".deleteModal__cancelBtn");
    close.forEach(item => {
        item.addEventListener("click", (e) => {
            modalDelete.style.display = "none";
        });
    });
}

