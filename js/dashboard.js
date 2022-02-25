import { modalDelete, modalEdit } from './modals.js';

(() => {
    const baseURL = "http://localhost:3000";
    let arrayItens = [];

    //METODO GET
    function getItens() {
        const dataArray = fetch(`${baseURL}/friends`);
        dataArray.then((response) => response.json())
            .then((data) => {
                arrayItens = data;
                creatHTML();
            });
    }

    function creatHTML() {
        const tabela = document.querySelector(".table");

        arrayItens.forEach((item) => {
            let div = document.createElement("div");
            let nome = document.createElement("p");
            let email = document.createElement("p");
            let genero = document.createElement("p");
            let descricao = document.createElement("p");
            let editar = document.createElement("p");
            let deletar = document.createElement("p");

            div.classList.add("table__line");
            nome.classList.add("table__cellName");
            email.classList.add("table__cellEmail");
            genero.classList.add("table__cellGender");
            descricao.classList.add("table__cellDescription");
            editar.classList.add("table__cellEdit");
            editar.classList.add("icon");
            deletar.classList.add("table__cellDelete");
            deletar.classList.add("icon");

            nome.textContent = item.name;
            email.textContent = item.email;
            genero.textContent = item.gender;
            descricao.textContent = item.description;
            editar.innerHTML = "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z' fill='black'/></svg>"
            deletar.innerHTML = "<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4ZM6 7V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6ZM14 14V18H10V14H8L12 10L16 14H14Z' fill='black'/></svg>"

            div.appendChild(nome);
            div.appendChild(email);
            div.appendChild(genero);
            div.appendChild(descricao);
            div.appendChild(editar);
            div.appendChild(deletar);
            tabela.appendChild(div);
        })

        modalEdit();
        modalDelete();
    }

    function init() {
        getItens();
    }

    init();

})();