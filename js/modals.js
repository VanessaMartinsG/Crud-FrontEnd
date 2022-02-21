
export function modalEdit(){

    const modalEdit = document.querySelector(".modalEditar");

    const edit = document.querySelectorAll(".editar");
    edit.forEach(item => {
        item.addEventListener("click", (e) => {
            modalEdit.style.display = "flex"; 
        });
    });
    const close = document.querySelectorAll(".closeEditar");
    close.forEach(item => {
        item.addEventListener("click", (e) => {
            modalEdit.style.display = "none"; 
        });
    });
}


export function modalDelete(){

    const modalDelete = document.querySelector(".modalDeletar");

    const delet = document.querySelectorAll(".deletar");
    delet.forEach(item => {
        item.addEventListener("click", (e) => {
            modalDelete.style.display = "flex"; 
        });
    });
        
    const close = document.querySelectorAll(".cancelar");
    close.forEach(item => {
        item.addEventListener("click", (e) => {
            modalDelete.style.display = "none"; 
        });
    });
}

    