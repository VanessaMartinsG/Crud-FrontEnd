/* MODAL DE EDITAR */

function abrirModalEditar(){
    const modal = document.querySelector(".modalEditar");
    const editar = document.querySelector(".editar");
    console.log(editar);

editar.addEventListener("click", (e) => {
    modal.style.display = "flex"; 
});
}

function fecharModalEditar(){
    const modal = document.querySelector(".modalEditar");
    const close = document.querySelector(".closeEditar");

close.addEventListener("click", (e) => {
    modal.style.display = "none"; 
});
}

/* MODAL DE DELETAR */

function abrirModalDeletar(){
    const modal = document.querySelector(".modalDeletar");
    const deletar = document.querySelector(".deletar");
    console.log(deletar);

deletar.addEventListener("click", (e) => {
    modal.style.display = "flex"; 
});
}

function fecharModalDeletar(){
    const modal = document.querySelector(".modalDeletar");
    const close = document.querySelector(".cancelar");

close.addEventListener("click", (e) => {
    modal.style.display = "none"; 
});
}


abrirModalEditar();
fecharModalEditar();
abrirModalDeletar();
fecharModalDeletar();