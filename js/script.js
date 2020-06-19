var conteudo;
document.querySelectorAll(".close").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelector("#sucesso").style.display = "none";
        document.querySelector("#erro").style.display = "none";
    });
});
document.querySelector("#form").addEventListener("submit", function(event) {
    event.preventDefault();
    let nome, cpf, data, tbody;
    nome = document.querySelector("#nome").value;
    cpf = document.querySelector("#cpf").value;
    data = document.querySelector("#data").value;
    tbody = document.querySelector("tbody");
    if (nome !== '' && cpf !== '' && data !== '') {
        if (conteudo === undefined) {
            conteudo = `<tr><td>${nome}</td><td>${cpf}</td><td>${data}</td><td><a href="#"><i class="fa fa-magic text-warning"></i></a></td>
            <td><a href="#"><i class="fas fa-times text-danger"></i></a></td>`;
            tbody.innerHTML = conteudo;
        } else {
            conteudo += `<tr><td>${nome}</td><td>${cpf}</td><td>${data}</td><td><a href="#"><i class="fa fa-magic text-warning"></i></a></td>
            <td><a href="#"><i class="fas fa-times text-danger"></i></a></td>`;
            tbody.innerHTML = conteudo;
            
        }
        document.querySelector("#sucesso").style.display = "block";
        document.querySelector("#erro").style.display = "none";
        document.querySelector("#nome").value = '';
        document.querySelector("#cpf").value = '';
        document.querySelector("#data").value = '';
    } else {
        document.querySelector("#erro").style.display = "block";
        document.querySelector("#sucesso").style.display = "none";
    }
});