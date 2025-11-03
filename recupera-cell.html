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
    imagem: "https://cdn-icons-png.flaticon.com/512/2282/2282188.png",
  },
  {
    id: 2,
    nome: "Bateria Nova",
    descricao: "Troca de bateria original ou compatível premium.",
    preco: 180.0,
    imagem: "https://cdn-icons-png.flaticon.com/512/3103/3103446.png",
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
      :root {
        --cor-fundo: #000;
        --cor-card: #141414;
        --cor-primaria: #ff6600;
        --cor-secundaria: #222;
        --cor-texto: #fff;
        --cor-cinza: #aaa;
      }
      body {
        font-family: "Poppins", Arial, sans-serif;
        margin: 0;
        background: var(--cor-fundo);
        color: var(--cor-texto);
      }
      header {
        background: var(--cor-secundaria);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 25px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.5);
        position: sticky;
        top: 0;
        z-index: 10;
      }
      .logo {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 700;
        color: var(--cor-primaria);
        font-size: 1.3em;
        letter-spacing: 1px;
      }
      .logo img {
        width: 40px;
        height: 40px;
      }
      .cart-icon {
        font-size: 1.2em;
        color: var(--cor-primaria);
        background: #111;
        border-radius: 8px;
        padding: 5px 10px;
      }
      main {
        padding: 30px 20px;
        max-width: 1000px;
        margin: auto;
      }
      h2 {
        text-align: center;
        color: var(--cor-primaria);
        margin-bottom: 25px;
        text-transform: uppercase;
        font-size: 1.8em;
      }
      .produtos {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 25px;
      }
      .card {
        background: var(--cor-card);
        border: 2px solid transparent;
        border-radius: 12px;
        padding: 20px;
        text-align: center;
        transition: all 0.3s ease;
      }
      .card:hover {
        transform: translateY(-5px);
        border: 2px solid var(--cor-primaria);
        box-shadow: 0 0 15px rgba(255, 102, 0, 0.4);
      }
      .card img {
        width: 100px;
        height: 100px;
        object-fit: contain;
        margin-bottom: 10px;
      }
      .card h3 {
        color: var(--cor-primaria);
        margin: 10px 0 5px;
      }
      .card p {
        color: var(--cor-cinza);
        font-size: 0.9em;
      }
      .card button {
        background: var(--cor-primaria);
        color: #000;
        border: none;
        padding: 10px 15px;
        border-radius: 6px;
        cursor: pointer;
        font-weight: bold;
        margin-top: 10px;
        transition: 0.3s;
      }
      .card button:hover {
        background: #ff8533;
      }
      .cart {
        background: var(--cor-secundaria);
        border-radius: 10px;
        padding: 20px;
        margin-top: 40px;
        box-shadow: 0 0 10px rgba(255,102,0,0.3);
      }
      .cart h3 {
        color: var(--cor-primaria);
        margin-bottom: 10px;
      }
      .cart ul {
        list-style: none;
        padding: 0;
      }
      .cart li {
        border-bottom: 1px solid #333;
        padding: 8px 0;
      }
      .cart button {
        background: var(--cor-primaria);
        border: none;
        padding: 12px 20px;
        font-weight: bold;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 15px;
        display: block;
      }
      .cart button:hover {
        background: #ff8533;
      }
      footer {
        text-align: center;
        color: var(--cor-cinza);
        padding: 20px;
        background: var(--cor-secundaria);
        margin-top: 60px;
      }
    </style>
  </head>
  <body>
    <header>
      <div class="logo">
        <img src="https://cdn-icons-png.flaticon.com/512/3209/3209043.png" alt="logo">
        Recupera Cell
      </div>
      <div class="cart-icon">🛒 <span id="cart-count">0</span></div>
    </header>

    <main>
      <h2>Nossos Serviços</h2>
      <div class="produtos" id="produtos"></div>

      <div class="cart" id="carrinho" style="display:none;">
        <h3>🛍️ Carrinho</h3>
        <ul id="cart-list"></ul>
        <div id="pedido"></div>
        <button onclick="finalizarPedido()">Finalizar Pedido</button>
      </div>
    </main>

    <footer>© 2025 Recupera Cell — Manutenções & Assistência Técnica</footer>

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
