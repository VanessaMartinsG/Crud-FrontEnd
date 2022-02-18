function abrirModal(){
    const modal = document.querySelector(".modal");
    const editar = document.querySelector(".editar");
    console.log(editar);

editar.addEventListener("click", (e) => {
    modal.style.display = "flex"; 
});
}

function fecharModal(){
    const modal = document.querySelector(".modal");
    const close = document.querySelector(".close");

close.addEventListener("click", (e) => {
    modal.style.display = "none"; 
});
}

abrirModal();
fecharModal();