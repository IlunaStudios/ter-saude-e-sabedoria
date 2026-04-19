# 🔍 DIAGNÓSTICO: Por Que as Categorias Não Aparecem?

## 📋 Como Checar Se Tudo Está Funcionando

### Passo 1: Abra o Console do Navegador

1. **Firefox, Chrome, Edge**: Pressione **F12**
2. Clique na aba **"Console"**
3. Atualize a página (F5)

### Passo 2: Procure Pelas Mensagens

Você vai ver mensagens como:

```
✅ Produtos carregados: 6
🎨 Renderizando 6 produtos...
📂 Categorias encontradas: (3) […]
  0: saude=💊 Saúde
  1: beleza=💄 Beleza
  2: alimentos=🥗 Alimentos
📊 Total de categorias:  3
📊 Total de produtos:  6
✅ 6 produtos renderizados com sucesso!
```

---

## ❌ Se Aparecer Uma Mensagem de ERRO

### Erro 1: "Carregando produtos da planilha... Configure um servidor HTTP"

**Causa**: Seu site está aberto como arquivo local (`file://`), não via HTTP.

**Solução**:

- ✅ Está no GitHub Pages? Tudo funciona!
- ❌ Está testando local? Use um servidor HTTP:

  **Windows (fácil)**:

  ```powershell
  cd "seu\caminho\OFFICIAL"
  python -m http.server 8000
  ```

  Depois abra: `http://localhost:8000`

### Erro 2: "❌ Erro ao carregar a planilha:"

**Possíveis causas**:

1. **ID da planilha incorreto** — `SHEET_ID` no script.js não existe
2. **Planilha não publicada** — Precisa fazer "Publicar na Web"
3. **GID errado** — Os números de aba (gid) não correspondem

**Verificar IDs de Aba (gid)**:

- Abra sua planilha no Google Sheets
- Clique com botão direito na aba → **Copiar ID da aba**
- Compare com o `gid` no script.js

### Erro 3: "⚠️ Nenhuma categoria para inserir"

**Causa**: A planilha foi carregada mas NÃO TEM PRODUTOS com categoria.

**Solução**: Verifique se sua planilha tem:

- ✅ Uma coluna chamada **"Categoria"** (ou "categoria/tipo")
- ✅ Valores como: "Saúde", "Beleza", "Fitness", "Alimentos"
- ✅ Uma coluna **"Produto"** com nomes
- ✅ Uma coluna **"Link"** com URLs

---

## 📊 O Que Significa Cada Mensagem?

| Mensagem                       | Significado                       |
| ------------------------------ | --------------------------------- |
| `✅ Produtos carregados: X`    | Carregou X produtos da planilha   |
| `📂 Categorias encontradas: X` | Encontrou X categorias diferentes |
| `🎨 Renderizando X produtos`   | Mostrando os produtos na tela     |
| `📊 Total de categorias: X`    | Número de abas/categorias         |
| `❌ Erro ao carregar`          | Falhou em carregar os dados       |

---

## 🛠️ O QUE FOI CORRIGIDO?

### ✅ Problema 1: Faixa Feia de Carregamento

- **Antes**: A mensagem "Carregando produtos..." aparecia por vários segundos
- **Depois**: Escondida imediatamente (display: none)

### ✅ Problema 2: Categorias Desapareciam

- **Antes**: Qualquer clique removia os botões de categoria
- **Depois**: Apenas botões de CATEGORIA são gerenciados, não os de plataforma

### ✅ Problema 3: Botões de Plataforma Sumiam

- **Antes**: A função removia TODOS os botões `.menu-item`
- **Depois**: Remove apenas botões com `data-cat` (categorias)
- **Resultado**: **Amazon | Shopee | MLivre sempre visíveis!** ✨

---

## 🧪 Teste Rápido

### Copie e cole no Console (F12) para testar:

```javascript
// Ver todas as categorias carregadas
console.log("Categorias em CATEGORY_LABELS:", Object.keys(CATEGORY_LABELS));

// Ver estado dos filtros
console.log("Filtro atual de categoria:", currentCategoryFilter);
console.log("Filtro atual de plataforma:", currentPlatformFilter);

// Contar produtos
console.log(
  "Total de cards:",
  document.querySelectorAll(".card-produto").length,
);

// Ver categorias nos cards
const cats = new Set();
document
  .querySelectorAll(".card-produto")
  .forEach((c) => cats.add(c.dataset.cat));
console.log("Categorias nos cards:", Array.from(cats));
```

---

## 📞 Se Ainda Não Funcionar?

### Checklist:

- [ ] Google Sheets publicada na web (Compartilhar → Publicar na web)
- [ ] SHEET_ID está correto no script.js
- [ ] GID das abas correspondem aos números corretos
- [ ] Planilha tem coluna "Categoria" com valores
- [ ] Planilha tem coluna "Link" com URLs
- [ ] Site está em HTTP (não file://)
- [ ] Console não mostra erros de CORS

**Depois de corrigir, atualize a página (F5) e veja o console novamente!**
