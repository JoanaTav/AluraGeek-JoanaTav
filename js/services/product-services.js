const listaDeProdutos = () => {
    return fetch("https://668787650bc7155dc018004b.mockapi.io/api/v1/produtos")
    .then((resposta) => resposta.json())
    .catch((erro) => console.log(erro));
};

const criaProduto = (nome, valor, imagem) => {
    return fetch("https://668787650bc7155dc018004b.mockapi.io/api/v1/produtos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome,
            valor,
            imagem,
        })
    })
    .then((resposta) => resposta.json())
    .catch((erro) => console.log(erro));
}

const deletaProduto = (id) => {
    return fetch(`https://668787650bc7155dc018004b.mockapi.io/api/v1/produtos${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((resposta) => resposta.json())
    .catch((erro) => console.log(erro));
}

export const servicosProdutos = {
    listaDeProdutos,
    criaProduto,
    deletaProduto,
};