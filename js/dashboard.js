/* MODAL DE EDITAR */

function abrirModalEditar(){
    const modal = document.querySelector(".modalEditar");
    const editar = document.querySelectorAll(".editar");
    editar.forEach(item => {
        item.addEventListener("click", (e) => {
            modal.style.display = "flex"; 
        });
    });
}

function fecharModalEditar(){
    const modal = document.querySelector(".modalEditar");
    const close = document.querySelectorAll(".closeEditar");
    close.forEach(item => {
        item.addEventListener("click", (e) => {
            modal.style.display = "none"; 
        });
    });
}

/* MODAL DE DELETAR */

function abrirModalDeletar(){
    const modal = document.querySelector(".modalDeletar");
    const deletar = document.querySelectorAll(".deletar");
    deletar.forEach(item => {
        item.addEventListener("click", (e) => {
            modal.style.display = "flex"; 
        });
    });
}

function fecharModalDeletar(){
    const modal = document.querySelector(".modalDeletar");
    const close = document.querySelectorAll(".cancelar");
    close.forEach(item => {
        item.addEventListener("click", (e) => {
            modal.style.display = "none"; 
        });
    });
}


abrirModalEditar();
fecharModalEditar();
abrirModalDeletar();
fecharModalDeletar();