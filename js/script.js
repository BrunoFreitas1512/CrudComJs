var conteudos = [], id, posicao = 0, codigoEditar = 0, idEditado, cont = {};
document.querySelectorAll(".close").forEach(item => {
    item.addEventListener("click", function() {
        document.querySelector("#sucesso").style.display = "none";
        document.querySelector("#erro").style.display = "none";
    });
});
document.querySelector("#form").addEventListener("submit", function(event) {
    event.preventDefault();
    let nome, cpf, data, conteudo;
    nome = document.querySelector("#nome").value;
    cpf = document.querySelector("#cpf").value;
    data = document.querySelector("#data").value;
    
    if (nome !== '' && cpf !== '' && data !== '') {
        if (codigoEditar === 0) {
            if (conteudos.length === 0) {
                id = 0;
            } else {
                id += 1;
            }
            conteudo = `<tr><td>${nome}</td><td>${cpf}</td><td>${data}</td><td><button type="button" class="btn" onclick="editar(${id});"><i class="fa fa-magic text-warning"></i></button></td>
            <td><button type="button" class="btn" onclick="excluir(${id});"><i class="fas fa-times text-danger"></i></button></td></tr>`;
            cont = {
                idC: id,
                text: conteudo,
            };
            conteudos.push(cont);
            document.querySelector("#sucesso").style.display = "block";
            document.querySelector("#erro").style.display = "none";
        } else {
            conteudo = `<tr><td>${nome}</td><td>${cpf}</td><td>${data}</td><td><button type="button" class="btn" onclick="editar(${id});"><i class="fa fa-magic text-warning"></i></button></td>
            <td><button type="button" class="btn" onclick="excluir(${idEditado});"><i class="fas fa-times text-danger"></i></button></td></tr>`;
            cont = {
                idC: idEditado,
                text: conteudo,
            };
            for (let i = 0; i < conteudos.length; i++) {
                if (conteudos[i].idC == idEditado) {
                    conteudos[i].idC = idEditado;
                    conteudos[i].text = conteudo;
                }
            }
            codigoEditar = 0;
            document.querySelector("#editado").style.display = "block";
            document.querySelector("#sucesso").style.display = "none";
            document.querySelector("#erro").style.display = "none";
        }
        
        let tbody = document.querySelector("tbody");
        let textos;
        for (let i = 0; i < conteudos.length; i++) {
            if (i === 0) {
                textos = conteudos[i].text;  
            } else {
                textos += conteudos[i].text;  
            }
        }
        tbody.innerHTML = textos;
        document.querySelector("#nome").value = '';
        document.querySelector("#cpf").value = '';
        document.querySelector("#data").value = '';
    } else {
        document.querySelector("#erro").style.display = "block";
        document.querySelector("#sucesso").style.display = "none";
    }
});

function editar(idE) {
    for (let i = 0; i < conteudos.length; i++) {
        if (conteudos[i].idC == idE) {
            codigoEditar = 1;
            idEditado = idE;
        }
    }
}
function excluir(idE) {
    alert(`O item que vai ser excluido é ${idE}`);
}
