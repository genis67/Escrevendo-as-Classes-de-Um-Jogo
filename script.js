// Classe Heroi para representar um herói e definir seu ataque
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        
        // Define o ataque com base no tipo de herói
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = " magia";
                break;
            case "guerreiro":
                ataque = " espada";
                break;
            case "monge":
                ataque = " artes marciais";
                break;
            case "ninja":
                ataque = " shuriken";
                break;
            default:
                ataque = "realizou um ataque desconhecido";
        }

        // Retorna a mensagem de ataque
        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}

// Função para obter os dados do herói
function obterDadosHeroi() {
    const nome = document.getElementById("nome").value;
    const idade = parseInt(document.getElementById("idade").value);
    const tipo = document.getElementById("tipo").value;
    const xp = parseInt(document.getElementById("xp").value);
    const vitorias = parseInt(document.getElementById("vitorias").value);
    const derrotas = parseInt(document.getElementById("derrotas").value);
    return { nome, idade, tipo, xp, vitorias, derrotas };
}

// Função para validar os dados de XP
function validarXP(xp) {
    if (isNaN(xp)) {
        exibirMensagem("Por favor, insira um valor numérico para o XP.");
        return false;
    }
    return true;
}

// Função para definir o nível do herói com base no XP
function definirNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        return "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";
    } else if (xp >= 10001) {
        return "Radiante";
    }
}

// Função para calcular o saldo de ranqueadas
function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

// Função para exibir a mensagem de resultado
function exibirMensagem(mensagem) {
    document.getElementById("resultado").innerText = mensagem;
}

// Função principal para classificar o herói e exibir seu ataque
function classificarHeroi() {
    // Obtém e valida os dados
    const { nome, idade, tipo, xp, vitorias, derrotas } = obterDadosHeroi();
    if (!validarXP(xp)) return;

    // Instancia o herói e determina o nível
    const heroi = new Heroi(nome, idade, tipo);
    const nivel = definirNivel(xp);
    const saldoVitorias = calcularSaldo(vitorias, derrotas);
    const ataqueMsg = heroi.atacar();

    // Exibe o resultado com o nível, saldo de ranqueadas e mensagem de ataque
    exibirMensagem(`O herói ${heroi.nome} de tipo ${heroi.tipo} tem saldo de ${saldoVitorias} está no nível de ${nivel}. ${ataqueMsg}`);
    
    // Exibe o botão "Nova Consulta"
    document.getElementById("novaConsulta").style.display = "inline-block";
}

// Função para resetar os campos e o resultado
function novaConsulta() {
    // Limpa os campos de entrada e o resultado
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("tipo").value = "guerreiro";
    document.getElementById("xp").value = "";
    document.getElementById("vitorias").value = "";
    document.getElementById("derrotas").value = "";
    exibirMensagem("");

    // Oculta o botão "Nova Consulta"
    document.getElementById("novaConsulta").style.display = "none";
}

// Adiciona eventos de clique aos botões
document.getElementById("submit").addEventListener("click", classificarHeroi);
document.getElementById("novaConsulta").addEventListener("click", novaConsulta);
