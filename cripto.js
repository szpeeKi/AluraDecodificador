// Função para criptografar o texto inserido pelo usuário
function criptografarTexto(){
    let textoInput = document.getElementById('input-texto').value.trim();

    // Verifica se o campo de entrada está vazio
    if (textoInput == ''){
        // Exibe uma mensagem de erro ou realiza outra ação apropriada
        alert('Por favor, insira um texto válido.');
        return; // Sai da função se o texto estiver vazio
    } else {
        // Limpa o texto removendo caracteres não alfabéticos e transforma em minúsculas
        let textoLimpo = limparTexto(textoInput);
        
        // Realiza a criptografia do texto limpo
        let textoCriptografado = criptografar(textoLimpo);
        
        // Exibe o texto criptografado no elemento de saída
        document.getElementById('output-texto').textContent = textoCriptografado;
        
        // Esconde a imagem e torna visível o botão de cópia
        document.getElementById('imagem').style.display = 'none';
        document.getElementById('copiar-texto').style.visibility = 'visible';
        document.getElementById('copiar-texto').style.pointerEvents = 'visible';
    }
}

// Função para descriptografar o texto inserido pelo usuário
function descriptografarTexto(){
    let textoInput = document.getElementById('input-texto').value.trim();

    // Verifica se o campo de entrada está vazio
    if (textoInput == ''){
    // Exibe uma mensagem de erro ou realiza outra ação apropriada
    alert('Por favor, insira um texto válido.');
    return; // Sai da função se o texto estiver vazio
    } else {
        // Realiza a descriptografia do texto inserido
        let textoDescriptografado = descriptografar(textoInput);
        
        // Exibe o texto descriptografado no elemento de saída
        document.getElementById('output-texto').textContent = textoDescriptografado;
        
        // Esconde a imagem (assumindo que 'imagem' seja um elemento de carregamento)
        document.getElementById('imagem').style.display = 'none';
    }
}

// Função para copiar o texto criptografado para a área de transferência
function copiarTexto() {
    // Obtém o texto criptografado do elemento de saída
    let textToClipboard = document.getElementById("output-texto").textContent;
    
    // Copia o texto para a área de transferência usando a API do navegador
    navigator.clipboard.writeText(textToClipboard);
    alert('Texto Copiado')
    
    // Limpa o conteúdo do elemento de saída
    document.getElementById("output-texto").textContent = "";
}

// Função auxiliar para limpar o texto, removendo caracteres não alfabéticos e convertendo para minúsculas
function limparTexto(texto){
    texto = texto.toLowerCase();
    return texto.replace(/[^a-z]/g, '');
}

function criptografar(texto) {
    const substituicoes = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let textoCriptografado = '';

    // Percorre cada caractere do texto
    for (let i = 0; i < texto.length; i++) {
        const char = texto[i];
        // Verifica se o caractere está nas substituições
        if (substituicoes[char]) {
            textoCriptografado += substituicoes[char];
        } else {
            textoCriptografado += char;
        }
    }

    return textoCriptografado;
}

function descriptografar(texto) {
    // Definir substituições inversas utilizando expressões regulares
    const substituicoesInversas = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    // Criar uma expressão regular com as "chaves" a serem substituídas
    const regex = new RegExp(`(${Object.keys(substituicoesInversas).join('|')})`, 'g');

    // Função de substituição
    function substituir(match) {
        return substituicoesInversas[match];
    }

    // Aplicar a substituição no texto criptografado usando a expressão regular
    const textoDescriptografado = texto.replace(regex, substituir);

    return textoDescriptografado;
}
