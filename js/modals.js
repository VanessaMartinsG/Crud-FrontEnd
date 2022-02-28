
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


export function modalDelete(listaAmigos) {

    const modalDelete = document.querySelector(".deleteModal");

    const delet = document.querySelectorAll(".table__cellDelete.icon");
    delet.forEach(item => {
        item.addEventListener("click", (e) => {
            modalDelete.style.display = "flex";
            let amigoId = item.parentNode.getAttribute("id");
            let amigo = listaAmigos.find(item =>
                item.id == amigoId);
            populateModalDelete(amigo);
        });
    });

    const close = document.querySelectorAll(".deleteModal__cancelBtn");
    close.forEach(item => {
        item.addEventListener("click", (e) => {
            modalDelete.style.display = "none";
        });
    });
}

function populateModalDelete(amigo) {
    const modalDelete = document.querySelector(".deleteModal");
    const modalTitle = modalDelete.querySelector(".deleteModal__title");
    modalTitle.textContent = "Tem certeza de que deseja excluir o amigo " + amigo.name + "?";
    const confirmDelete = modalDelete.querySelector(".deleteModal__deleteBtn");
    confirmDelete.setAttribute("id", amigo.id);
}

