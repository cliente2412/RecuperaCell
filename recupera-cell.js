// ============================
// Recupera Cell - Site completo (Front + Back no mesmo arquivo)
// ============================

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -------- PRODUTOS EXEMPLO --------
const produtos = [
  {
    id: 1,
    nome: "Troca de Tela",
    descricao: "Substituímos a tela com qualidade e garantia.",
    preco: 250.0,
    imagem:
      "https://cdn-icons-png.flaticon.com/512/2282/2282188.png",
  },
  {
    id: 2,
    nome: "Bateria Nova",
    descricao: "Troca de bateria original ou compatível premium.",
    preco: 180.0,
    imagem:
      "https://cdn-icons-png.flaticon.com/512/3103/3103446.png",
  },
];

app.get("/api/produtos", (req, res) => res.json(produtos));

// -------- FRONTEND HTML --------
app.get("/", (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Recupera Cell</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        background: #000;
        color: #fff;
      }
      header {
        background: #111;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
      }
      .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        color: orange;
        font-weight: bold;
      }
      .logo img {
        width: 32px;
        height: 32px;
      }
      main { padding: 20px; }
      h2 { color: orange; }
      .produtos {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
      }
      .card {
        background: #1a1a1a;
        color: #fff;
        border-radius: 8px;
        padding: 15px;
        text-align: center;
      }
      .card img {
        width: 100px;
        height: 100px;
        object-fit: contain;
      }
      .card button {
        background: orange;
        color: black;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
      }
      .cart {
        background: #111;
        color: #fff;
        border-radius: 8px;
        padding: 20px;
        margin-top: 30px;
      }
      .cart button {
        background: orange;
        border: none;
        padding: 10px 20px;
        font-weight: bold;
        border-radius: 6px;
        cursor: pointer;
      }
      footer {
        text-align: center;
        color: gray;
        padding: 15px;
        background: #111;
        margin-top: 40px;
      }
    </style>
  </head>
  <body>
    <header>
      <div class="logo">
        <img src="https://cdn-icons-png.flaticon.com/512/3209/3209043.png" alt="logo">
        Recupera Cell
      </div>
      <div>🛒 <span id="cart-count">0</span></div>
    </header>

    <main>
      <h2>Nossos Serviços</h2>
      <div class="produtos" id="produtos"></div>

      <div class="cart" id="carrinho" style="display:none;">
        <h3>Carrinho</h3>
        <ul id="cart-list"></ul>
        <div id="pedido"></div>
        <button onclick="finalizarPedido()">Finalizar</button>
      </div>
    </main>

    <footer>© 2025 Recupera Cell — Manutenções & Assistência</footer>

    <script>
      let carrinho = [];
      const produtosEl = document.getElementById("produtos");
      const carrinhoEl = document.getElementById("carrinho");
      const cartList = document.getElementById("cart-list");
      const pedidoEl = document.getElementById("pedido");
      const countEl = document.getElementById("cart-count");

      async function carregarProdutos() {
        const res = await fetch('/api/produtos');
        const data = await res.json();
        produtosEl.innerHTML = data.map(p => \`
          <div class="card">
            <img src="\${p.imagem}" alt="\${p.nome}">
            <h3>\${p.nome}</h3>
            <p>\${p.descricao}</p>
            <strong>R$ \${p.preco.toFixed(2)}</strong><br>
            <button onclick='adicionarAoCarrinho(\${JSON.stringify(p)})'>Adicionar</button>
          </div>
        \`).join('');
      }

      function adicionarAoCarrinho(produto) {
        const existe = carrinho.find(p => p.id === produto.id);
        if (existe) existe.qtd++;
        else carrinho.push({ ...produto, qtd: 1 });
        atualizarCarrinho();
      }

      function atualizarCarrinho() {
        if (carrinho.length === 0) {
          carrinhoEl.style.display = 'none';
          countEl.textContent = 0;
          return;
        }
        carrinhoEl.style.display = 'block';
        countEl.textContent = carrinho.length;
        cartList.innerHTML = carrinho.map(p => \`
          <li>\${p.nome} (x\${p.qtd}) - R$ \${(p.preco * p.qtd).toFixed(2)}</li>
        \`).join('');
      }

      function gerarCodigoPedido() {
        const data = new Date();
        const codigo = "RC-" + 
          data.getFullYear().toString() +
          (data.getMonth()+1).toString().padStart(2, '0') +
          data.getDate().toString().padStart(2, '0') + "-" +
          Math.floor(Math.random()*1000).toString().padStart(3, '0');
        return codigo;
      }

      function finalizarPedido() {
        const codigo = gerarCodigoPedido();
        pedidoEl.innerHTML = "<p><strong>Código do Pedido:</strong> " + codigo + "</p>";
      }

      carregarProdutos();
    </script>
  </body>
  </html>
  `;
  res.send(html);
});

// -------- INICIAR SERVIDOR --------
app.listen(PORT, () =>
  console.log(\`✅ Recupera Cell rodando em http://localhost:\${PORT}\`)
);
