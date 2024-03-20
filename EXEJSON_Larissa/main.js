
//Implemente uma função que receba uma lista de alunos de ISW-008 (nome, ra, notaP1, notaP2). 

//Exemplo: {nome:"Diego", ra:"005083231101",notaP1:10,notaP2:8}

//Essa função deverá: 
/* 
    a) Mostrar na tela os alunos.
    b) Notas Menores que 6 em vermelho, maiores ou iguais em azul
    c) A media da P1 da turma
    d) A media da P2 da turma
    e) A média de cada Aluno
    f) A quantidades de aprovados
    g) A quantidade de reprovados
    h) Tudo em uma Tabela
*/

function Alunos() {
    var infoAlunos = [
        { 
            nome: "Claudio", 
            ra: "00932345569", 
            notap1: 8,
            notap2: 5
        }, 
        {
            nome: "Amanda",
            ra: "00189784563",
            notap1: 4,
            notap2: 10
        },
        {
            nome: "Patricia",
            ra: "00438290444",
            notap1: 8,
            notap2: 9
        },
        {
            nome: "Leonardo",
            ra: "00400039999",
            notap1: 2,
            notap2: 9
        },
        {
            nome: "Jean",
            ra: "00799990000",
            notap1: 5,
            notap2: 7
        },
        {
            nome: "Lavinia",
            ra: "9200000321",
            notap1: 6,
            notap2: 4
        },
        {
            nome: "Rose",
            ra: "9200000321",
            notap1: 7,
            notap2: 3
        },
        {
            nome: "Vinicius",
            ra: "9200000321",
            notap1: 10,
            notap2: 7
        }
    ];

    return infoAlunos; 
}

function tabelaAlunos(infoAlunos) {
   

    var mediaAluno = 0
    var aprovados = 0
    var reprovados = 0
    var html = ""
    var mediaP1 = calcularMedia(infoAlunos, "notap1")
    var mediaP2 = calcularMedia(infoAlunos, "notap2")

    for(let i = 0; i < infoAlunos.length; i++) {
        mediaAluno = (infoAlunos[i].notap1 + infoAlunos[i].notap2) / 2

        html += "<tr class='active-row'><td>" + infoAlunos[i].nome + "</td>"
            + "<td>" + infoAlunos[i].ra + "</td>"

        if(infoAlunos[i].notap1 < 6) {
            html += "<td class='vermelho'>" + infoAlunos[i].notap1 + "</td>"
        } else {
            html += "<td class='azul'>" + infoAlunos[i].notap1 + "</td>"
        }

        if(infoAlunos[i].notap2 < 6) {
            html += "<td class='vermelho'>" + infoAlunos[i].notap2 + "</td>"
        } else {
            html += "<td class='azul'>" + infoAlunos[i].notap2 + "</td>"
        }

        if(mediaAluno < 6) {
            html += "<td class='vermelho'>" + mediaAluno + "</td>"
        } else {
            html += "<td class='azul'>" + mediaAluno + "</td>"
        }

        if(mediaAluno < 6) {
            html += "<td class='reprovado'> Reprovado </td></tr>"
            reprovados += 1
        } else {
            html += "<td class='aprovado'> Aprovado </td></tr>"
            aprovados += 1
        }
    }

    let aprovadosOK = document.getElementById("aprovados")
    aprovadosOK.textContent = aprovados
    let reprovadosOK = document.getElementById("reprovados")
    reprovadosOK.textContent = reprovados 

    let tbody = document.getElementById("listaAlunos")
    tbody.innerHTML = html; 

    
    let mediaP1HTML = document.getElementById("mediaP1")
    mediaP1HTML.textContent = mediaP1.toFixed(2);

    let mediaP2HTML = document.getElementById("mediaP2")
    mediaP2HTML.textContent = mediaP2.toFixed(2);
}

function calcularMedia(alunos, campo) {
    var soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma += alunos[i][campo]
    }
    return soma / alunos.length
}


