let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const itensCarrinho = document.getElementById('itensCarrinho');
    const totalCarrinho = document.getElementById('totalCarrinho');

    if (carrinho.length === 0) {
        itensCarrinho.innerHTML = '<p>Nenhum item no carrinho.</p>';
        totalCarrinho.innerHTML = 'Total: R$0,00';
    } else {
        itensCarrinho.innerHTML = carrinho.map(item => `<p>${item.nome} - R$${item.preco.toFixed(2)}</p>`).join('');
        totalCarrinho.innerHTML = `Total: R$${total.toFixed(2)}`;
    }
}

function proseguirParaPagamento() {
    document.querySelector('.carrinho').style.display = 'none';
    document.querySelector('.pagamento').style.display = 'block';
}

function mostrarPagamentoCartao() {
    document.querySelector('.pagamento').style.display = 'none';
    document.querySelector('.cartao').style.display = 'block';
}

function mostrarPagamentoPix() {
    document.querySelector('.pagamento').style.display = 'none';
    document.querySelector('.pix').style.display = 'block';
}

function validarPagamento() {
    if (document.querySelector('.cartao').style.display === 'block') {
        const numero = document.getElementById('cartao-numero').value;
        const validade = document.getElementById('cartao-validade').value;
        const cvv = document.getElementById('cartao-cvv').value;

        if (numero && validade && cvv) {
            document.querySelector('.cartao').style.display = 'none';
            document.querySelector('.endereco').style.display = 'block';
        } else {
            alert('Por favor, preencha todos os campos do cartão.');
        }
    } else if (document.querySelector('.pix').style.display === 'block') {
        document.querySelector('.pix').style.display = 'none';
        document.querySelector('.endereco').style.display = 'block';
    }
}

function finalizarEndereco() {
    const rua = document.getElementById('endereco-rua').value;
    const cidade = document.getElementById('endereco-cidade').value;
    const cep = document.getElementById('endereco-cep').value;
    const nomeCliente = document.getElementById('nome-cliente').value;

    if (rua && cidade && cep && nomeCliente) {
        document.querySelector('.endereco').style.display = 'none';
        document.getElementById('finalizacao').style.display = 'block';
        document.getElementById('mensagemFinalizacao').textContent = 'Compra finalizada com sucesso!';
    } else {
        alert('Por favor, preencha todos os campos do endereço.');
    }
}

function finalizarCompra() {
    validarPagamento();
}
